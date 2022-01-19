import { container } from 'tsyringe';

import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassMongoRepository } from '../infra/typeorm/mongo/repositories/ClassMongoRepository';

container.registerSingleton<ClassRepository>('ClassRepository', ClassMongoRepository);
