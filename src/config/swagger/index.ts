import env from '../../env';

export const swaggerOptions = {
  routePrefix: '/swagger/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Test API',
      description: 'Building a blazing fast REST API with Node.js, Postgres, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: `localhost:${env.server.port}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    security: [{ bearerAuth: [] as any }],
    securityDefinitions: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};
