import dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error('Couldn\'t find .env file');
}

export default {
  express: {
    IP: process.env.OPENSHIFT_NODEJS_IP || process.env.IP,
    PORT: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT,
  },
  mongodb: {
    URL: process.env.MONGODB_URL,
  },
  auth: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
