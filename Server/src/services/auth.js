import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import UserModel from '../models/User';

async function hashPassword(password) {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
}

function generateJWT(userId) {
  return jwt.sign(userId, config.auth.JWT_SECRET);
}

async function register(credentials) {
  const passwordHash = await hashPassword(credentials.password);
  const user = new UserModel();

  const result = await user.register({ username: credentials.username, passwordHash });

  const token = generateJWT(result.userId);
  return { ...result, token };
}

export default { register };
