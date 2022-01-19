import { CreateCommentDTO } from '../dtos/CreateCommentDTO';
import { Comment } from '../schemas/Comment';

export interface CommentRepository {
    findOneById(id: string): Promise<Comment | undefined>;

    findSomeByClassIdAndLimit(id_class: string, limit: number): Promise<Comment[]>;

    create(createCommentDTO: CreateCommentDTO): Promise<Comment>;

    list(): Promise<Comment[]>;

    delete(comment: Comment): Promise<Comment>;
}
