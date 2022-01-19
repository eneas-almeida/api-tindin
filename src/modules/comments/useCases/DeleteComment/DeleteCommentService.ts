import { ResponseCommentDTO } from '@modules/comments/dtos/ReponseCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteCommentService {
    constructor(@inject('CommentRepository') private classRepository: CommentRepository) {}

    async execute(id: string): Promise<ResponseCommentDTO> {
        const existsSchema = await this.classRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Comment id ${id} not found!`, 404);
        }

        await this.classRepository.delete(existsSchema);

        return {
            result: existsSchema,
        };
    }
}
