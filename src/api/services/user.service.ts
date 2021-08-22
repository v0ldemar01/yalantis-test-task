import { getCustomRepository } from 'typeorm';
import { ICreateUserDto } from '../../common/models/user';
import { User } from '../../data/entities/User';
import { UserRepository } from '../../data/repositories/userRepository';

export const createUserService = async (user: ICreateUserDto) => {
  const userRepository = getCustomRepository(UserRepository);
  const newUser: User = await userRepository.createUser(user);
  return { id: newUser.id };
};

export const getUserbyId = async (id: string) => {
  const userRepository = getCustomRepository(UserRepository);
  const user: User = await userRepository.getByOption({ where: { id } });
  return user;
};

