import UserModel from '../models/User';

function register(credentials) {
  const user = new UserModel();
  return user.register(credentials);
}

export default { register };
