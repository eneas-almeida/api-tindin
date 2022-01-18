import { ReponseListCommentDTO } from '@modules/comments/dtos/ReponseListCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListCommentsService {
    constructor(@inject('CommentRepository') private commentRepository: CommentRepository) {}

    async execute(): Promise<ReponseListCommentDTO> {
        const result = await this.commentRepository.list();

        return {
            result,
        };
    }
}
