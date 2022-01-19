import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { UserInMemory } from '@modules/users/schemas/inMemory/UserInMemory';
import { User } from '@modules/users/schemas/User';
import 'reflect-metadata';
import { v4 as uuid } from 'uuid';
import { UserRepository } from '../UserRepository';

export class UserRepositoryInMemory implements UserRepository {
    private repository: User[];

    constructor() {
        this.repository = [];
    }

    async findOneById(id: string): Promise<User | undefined> {
        return this.repository.find((user) => user._id === id);
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.repository.find((user) => user.email === email);
    }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new UserInMemory();

        user._id = uuid();

        Object.assign(user, createUserDTO);

        this.repository.push(user);

        return user;
    }
}
