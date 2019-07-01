import bcrypt from 'bcrypt';
import UserModel from '../models/User';

async function hashPassword(password) {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
}

async function register(credentials) {
  const passwordHash = await hashPassword(credentials.password);
  const user = new UserModel();

  return user.register({ username: credentials.username, passwordHash });
}

export default { register };
