import UserModel from '../models/User';

async function getAllFeeds(userId) {
  const result = await UserModel.getAllFeeds(userId);
  return result.data.feeds;
}

async function addFeed(arg) {
  const result = await UserModel.addFeed(arg.userId, arg.feed);
  return result;
}

export default { getAllFeeds, addFeed };
