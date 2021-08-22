import { RouteOptions } from 'fastify';
import { AddNewUserSchema, getUserSchema } from './docs/user.doc';
import * as userController from '../controllers/user.controller';
import { multerParser } from '../../utils/multer';
import { ApiRoutes } from '../constants/api';

const postUserRoute: RouteOptions = {
  method: ApiRoutes.POST,
  url: '/api/user',
  preHandler: multerParser.single('logo'),
  handler: userController.createUser as any,
  schema: AddNewUserSchema
};

const getUserRoute: RouteOptions = {
  method: ApiRoutes.GET,
  url: '/api/user/:id',
  handler: userController.getUserById as any,
  schema: getUserSchema
};

export default [postUserRoute, getUserRoute];
