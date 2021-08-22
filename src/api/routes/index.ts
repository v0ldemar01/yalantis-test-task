import * as fastify from 'fastify';
import userRoutes from './user.route';

export default (app: fastify.FastifyInstance) => {
  [...userRoutes].forEach(chunk => app.route(chunk));
};
