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

export default mongoose.model('User', UserSchema);
