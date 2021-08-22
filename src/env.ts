import dotenv from 'dotenv';
import { getOsEnv } from './common/helpers';

dotenv.config();

const env = {
  server: {
    port: process.env.PORT
  },
  db: {
    database: getOsEnv('TYPEORM_DATABASE'),
    username: getOsEnv('TYPEORM_USERNAME'),
    password: getOsEnv('TYPEORM_PASSWORD'),
    host: getOsEnv('TYPEORM_HOST'),
    port: getOsEnv('TYPEORM_PORT'),
    type: getOsEnv('TYPEORM_CONNECTION'),
    logging: getOsEnv('TYPEORM_LOGGING'),
    migrationsRun: getOsEnv('TYPEORM_MIGRATIONS_RUN'),
    synchronize: getOsEnv('TYPEORM_SYNCHRONIZE'),
    entities: [getOsEnv('TYPEORM_ENTITIES')],
    migrations: [getOsEnv('TYPEORM_MIGRATIONS')],
    cli: {
      migrationsDir: getOsEnv('TYPEORM_MIGRATIONS_DIR')
    }
  },
  cloud: {
    name: getOsEnv('CLOUD_NAME'),
    key: getOsEnv('CLOUD_KEY'),
    secret: getOsEnv('CLOUD_SECRET')
  }
};

export default env;
