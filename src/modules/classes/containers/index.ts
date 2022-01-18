import { container } from 'tsyringe';

import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { ClasseMongoRepository } from '../infra/typeorm/mongo/repositories/ClasseMongoRepository';

container.registerSingleton<ClasseRepository>('ClasseRepository', ClasseMongoRepository);
