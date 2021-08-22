import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { ICreateUserDto } from '../../common/models/user';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(user: ICreateUserDto): Promise<User> {
    return this.save(user);
  }

  async getByOption(where: FindOneOptions<User>): Promise<User> {
    return this.findOne(where);
  }
}
