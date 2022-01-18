import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { User } from '@modules/users/schemas/User';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { UserMongoSchema } from '../schemas/UserMongoSchema';

export class UserMongoRepository implements UserRepository {
    private repository: MongoRepository<User>;

    constructor() {
        this.repository = getMongoRepository(UserMongoSchema, 'mongodb');
    }

    async findOneById(id: string): Promise<User | undefined> {
        return await this.repository.findOne({ _id: id });
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return await this.repository.findOne({ email });
    }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const schemaCreated = this.repository.create(createUserDTO);

        await this.repository.save(schemaCreated);

        return schemaCreated;
    }
}
