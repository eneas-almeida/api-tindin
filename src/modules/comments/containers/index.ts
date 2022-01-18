import { container } from 'tsyringe';

import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentMongoRepository } from '../infra/typeorm/mongo/repositories/CommentMongoRepository';

container.registerSingleton<CommentRepository>('CommentRepository', CommentMongoRepository);
