import { CreateCommentDTO } from '@modules/comments/dtos/CreateCommentDTO';
import { Comment } from '@modules/comments/schemas/Comment';
import { CommentInMemory } from '@modules/comments/schemas/inMemory/CommentInMemory';
import { v4 as uuid } from 'uuid';
import { CommentRepository } from '../CommentRepository';

export class CommentRepositoryInMemory implements CommentRepository {
    private repository: Comment[];

    constructor() {
        this.repository = [];
    }

    async countById(id_class: string): Promise<number> {
        const classes = this.repository.filter((e) => e.id_class === id_class);

        return classes.length;
    }

    async findSomeByClassIdAndLimit(id_class: string, limit: number): Promise<Comment[]> {
        const classes = this.repository.filter((e) => e.id_class === id_class);

        return classes.slice(0, limit + 1);
    }

    async findOneById(id: string): Promise<Comment | undefined> {
        return this.repository.find((comment) => comment._id === id);
    }

    async create(createCommentDTO: CreateCommentDTO): Promise<Comment> {
        const comment = new CommentInMemory();

        comment._id = uuid();

        Object.assign(comment, createCommentDTO);

        this.repository.push(comment);

        return comment;
    }

    async list(): Promise<Comment[]> {
        return this.repository;
    }

    async delete(comment: Comment): Promise<Comment> {
        const index = this.repository.indexOf(comment);

        if (index !== -1) {
            this.repository.splice(index, 1);
        }

        return comment;
    }
}
