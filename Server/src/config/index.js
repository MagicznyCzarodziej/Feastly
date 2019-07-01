import dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error('Couldn\'t find .env file');
}

export default {
  express: {
    IP: process.env.IP,
    PORT: process.env.PORT,
  },
  mongodb: {
    URL: process.env.MONGODB_URL,
  },
};
