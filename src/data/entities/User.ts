import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract/AbstractEntity';

@Entity()
export class User extends AbstractEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  logoLink: string;
}
