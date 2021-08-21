import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { IRegisterUserDto } from '../../common/models/user';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(user: IRegisterUserDto): Promise<string> {
    const createdUser = await this.create(user);
    return createdUser.id;
  }

  async getByOption(where: FindOneOptions<User>): Promise<User> {
    const user: User = await this.findOne(where);
    return user;
  }
}
