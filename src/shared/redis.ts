import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisCLient = createClient({
  url: config.redis.url
});

redisCLient.on('error', (error) => logger.error('RedisError:', error));
redisCLient.on('connect', (error) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  await redisCLient.connect();
};

export const RedisCLient = {
  connect
};
