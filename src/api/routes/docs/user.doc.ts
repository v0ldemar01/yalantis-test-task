import { HttpStatusCode } from '../../constants/http';

export const AddNewUserSchema = {
  description: 'Create a new user',
  consumes: ['multipart/form-data'],
  tags: ['users'],
  summary: 'Creates new user with given values',
  response: {
    [HttpStatusCode.CREATED]: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    }
  }
};

export const getUserSchema = {
  description: 'Get a user',
  consumes: ['application/json'],
  tags: ['users'],
  summary: 'Get user by id',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    [HttpStatusCode.OK]: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        logo: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    }
  }
};

