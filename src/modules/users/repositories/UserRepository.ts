import { User } from '@modules/users/schemas/User';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

export interface UserRepository {
    findOneById(id: string): Promise<User | undefined>;

    findOneByEmail(email: string): Promise<User | undefined>;

    create(createUserDTO: CreateUserDTO): Promise<User>;
}
