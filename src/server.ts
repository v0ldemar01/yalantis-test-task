/* eslint-disable no-console */
import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import swagger, { SwaggerOptions } from 'fastify-swagger';
import { createConnection } from 'typeorm';
import env from './env';
import { swaggerOptions } from './config/swagger';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true });

server.register(swagger as FastifyPluginCallback<SwaggerOptions, Server> | any, swaggerOptions);

createConnection()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

server.listen(env.server.port as string, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.swagger();
  server.log.info(`Server listening on ${address}`);
});
