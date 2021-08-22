/* eslint-disable no-console */
import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import cors from 'fastify-cors';
import swagger, { SwaggerOptions } from 'fastify-swagger';
import multer from 'fastify-multer';
import { createConnection } from 'typeorm';
import { swaggerOptions } from './config/swagger';
import routes from './api/routes';
import env from './env';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true });

server.register(swagger as FastifyPluginCallback<SwaggerOptions, Server> | any, swaggerOptions);
server.register(cors);
server.register(multer.contentParser);

routes(server);

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
