import { CreateCommentDTO } from '@modules/comments/dtos/CreateCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { Comment } from '@modules/comments/schemas/Comment';
import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { CommentMongoSchema } from '../schemas/CommentMongoSchema';

export class CommentMongoRepository implements CommentRepository {
    private repository: MongoRepository<Comment>;

    constructor() {
        this.repository = getMongoRepository(CommentMongoSchema, 'mongodb');
    }

    async findOneById(id: string): Promise<Comment | undefined> {
        return await this.repository.findOne({ _id: new ObjectID(id) });
    }

    async create(createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const schemaCreated = this.repository.create(createCommentDTO);

        await this.repository.save(schemaCreated);

        return schemaCreated;
    }

    async list(): Promise<Comment[]> {
        return await this.repository.find();
    }

    async delete(classe: Comment): Promise<Comment> {
        await this.repository.delete(classe);

        return classe;
    }
}
