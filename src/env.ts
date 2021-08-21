import dotenv from 'dotenv';

dotenv.config();

const env = {
  server: {
    port: process.env.PORT
  }
};

export default env;
