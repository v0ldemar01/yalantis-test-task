import { FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
import { ICreateUserDto } from '../../common/models/user';
import { validateEmail } from '../../utils/validation';
import { HttpStatusCode } from '../constants/http';
import { downloadImage, getImage } from '../services/image.service';
import * as userService from '../services/user.service';

interface IMulterRequest extends FastifyRequest {
  file: any;
}

export const createUser = async (req: IMulterRequest, res: FastifyReply<ServerResponse | any>) => {
  const userData = req.body as { [key: string]: string };
  try {
    validateEmail(userData.email);
    await downloadImage(req.file);
    const result = await userService.createUserService({
      ...userData, logoLink: req.file.originalname
    } as ICreateUserDto);
    return res.send(result);
  } catch (err) {
    return res.status(HttpStatusCode.BAD_REQUEST)
      .send({
        error: true,
        message: err.message
      });
  }
};

export const getUserById = async (req: FastifyRequest, res: FastifyReply<ServerResponse | any>) => {
  const userId = (req.params as any).id;
  const result = await userService.getUserbyId(userId);
  const image = await getImage(result.logoLink);
  return res.send({ ...result, logo: image });
};

