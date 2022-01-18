import { container } from 'tsyringe';

import '@modules/users/providers';

import { UserRepository } from '@modules/users/repositories/UserRepository';
import { UserMongoRepository } from '../infra/typeorm/mongo/repositories/UserMongoRepository';

container.registerSingleton<UserRepository>('UserRepository', UserMongoRepository);
