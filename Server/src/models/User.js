import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import FeedSchema from './Feed';

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

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.register = async function register(credentials) {
  this.authentication.username = credentials.username;
  this.authentication.passwordHash = credentials.passwordHash;

  await this.save();

  return this._id;
};

export default mongoose.model('User', UserSchema);
