import { CreateCommentDTO } from '../dtos/CreateCommentDTO';
import { Comment } from '../schemas/Comment';

export interface CommentRepository {
    countById(id_class: string): Promise<number>;

    findOneById(id: string): Promise<Comment | undefined>;

    findSomeByClassId(id_class: string): Promise<Comment[]>;

    findSomeByClassIdAndLimit(id_class: string, limit: number): Promise<Comment[]>;

    create(createCommentDTO: CreateCommentDTO): Promise<Comment>;

    list(): Promise<Comment[]>;

    delete(comment: Comment): Promise<Comment>;

    deleteAll(ids: string[]): Promise<void>;
}
