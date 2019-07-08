/* eslint-disable func-names */
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import FeedSchema from './FeedSchema';

const UserSchema = new mongoose.Schema({
  authentication: {
    username: {
      type: String,
      unique: true,
      required: [true, 'can\'t be blank'],
      index: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  data: {
    feeds: [FeedSchema],
  },
});

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.register = async function (credentials) {
  this.authentication.username = credentials.username;
  this.authentication.passwordHash = credentials.passwordHash;

  await this.save();

  return {
    username: this.authentication.username,
    userId: this._id,
  };
};

UserSchema.statics.getAllFeeds = function (userId) {
  return this.findOne({ _id: mongoose.Types.ObjectId(userId) }, { data: 1 });
};

UserSchema.statics.addFeed = async function (userId, feed) {
  const user = await this.findOne({ _id: mongoose.Types.ObjectId(userId) }, { data: 1 });
  const length = user.data.feeds.push(feed);
  user.save();
  return user.data.feeds[length - 1];
};

UserSchema.statics.getCategories = async function (userId) {
  const user = await this.findOne({ _id: mongoose.Types.ObjectId(userId) }, { data: 1 });
  const { feeds } = user.data;
  const categories = [...new Set(feeds.map(feed => feed.category))];
  return categories;
};

export default mongoose.model('User', UserSchema);
