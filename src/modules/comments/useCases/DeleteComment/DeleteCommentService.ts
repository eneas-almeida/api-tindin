import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ResponseCommentDTO } from '@modules/comments/dtos/ReponseCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteCommentService {
    constructor(
        @inject('CommentRepository') private commentRepository: CommentRepository,
        @inject('ClassRepository') private classRepository: ClassRepository
    ) {}

    async execute(id: string): Promise<ResponseCommentDTO> {
        const existsCommentSchema = await this.commentRepository.findOneById(id);

        if (!existsCommentSchema) {
            throw new AppException(`Comment id ${id} not found!`, 404);
        }

        const { id_class } = existsCommentSchema;

        const existsClassSchema = await this.classRepository.findOneById(id_class);

        if (!existsClassSchema) {
            throw new AppException(`Class id ${id_class} not found!`, 404);
        }

        await this.commentRepository.delete(existsCommentSchema);

        await this.classRepository.updateValueTotalComment(existsClassSchema, -1);

        return {
            result: existsCommentSchema,
        };
    }
}
