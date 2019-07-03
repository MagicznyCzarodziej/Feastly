import UserModel from '../models/User';

async function getAllFeeds(userId) {
  const result = await UserModel.getAllFeeds(userId);
  return result.data.feeds;
}

export default { getAllFeeds };
