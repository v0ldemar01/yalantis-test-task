import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import fastswagger, { SwaggerOptions } from 'fastify-swagger';
import env from './env';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true });

server.register(fastswagger as FastifyPluginCallback<SwaggerOptions, Server> | any, {
  exposeRoute: true,
  routePrefix: '/swagger/docs',
  swagger: {
    info: { title: 'fastify-api' },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
});

server.listen(env.server.port as string, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening on ${address}`);
});

server.ready(err => {
  if (err) throw err;
  server.swagger();
});
