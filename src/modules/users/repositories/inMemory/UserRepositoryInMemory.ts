import { User } from '@modules/users/schemas/User';
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
}
