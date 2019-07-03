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

  const token = generateJWT({ userId: result.userId });
  return { ...result, token };
}

async function login(credentials) {
  // Find user by username
  const user = await UserModel.findOne({ 'authentication.username': credentials.username }, { data: 0 });
  if (!user) throw new Error('User doesn\'t exist');

  // Check if password is correct
  const isPasswordValid = await bcrypt.compare(credentials.password, user.authentication.passwordHash);
  if (!isPasswordValid) throw new Error('Invalid password');
  
  const token = generateJWT({ userId: user._id });
  return { 
    userId: user._id,
    username: user.authentication.username,
    token
  };
}

async function auth(token) {
  const user = await jwt.verify(token, config.auth.JWT_SECRET);
  return user.userId;
}

export default { register, login, auth };
