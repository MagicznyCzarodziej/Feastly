import UserModel from '../models/User';

async function getFeeds(userId, options) {
  const result = await UserModel.getFeeds(userId, options);
  return result;
}

async function addFeed(arg) {
  const result = await UserModel.addFeed(arg.userId, arg.feed);
  return result;
}

async function getCategories(userId) {
  const result = await UserModel.getCategories(userId);
  return result;
}

export default { getFeeds, addFeed, getCategories };
