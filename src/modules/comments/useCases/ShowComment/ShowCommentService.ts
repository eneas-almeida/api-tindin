import { ResponseCommentDTO } from '@modules/comments/dtos/ReponseCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ShowCommentService {
    constructor(@inject('CommentRepository') private commentRepository: CommentRepository) {}

    async execute(id: string): Promise<ResponseCommentDTO> {
        const existsSchema = await this.commentRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Comment id ${id} not found!`, 404);
        }

        return {
            result: existsSchema,
        };
    }
}
