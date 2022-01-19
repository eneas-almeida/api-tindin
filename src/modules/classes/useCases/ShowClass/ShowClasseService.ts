import { ResponseClassDTO } from '@modules/classes/dtos/ReponseClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ShowClassService {
    constructor(
        @inject('ClassRepository') private classRepository: ClassRepository,
        @inject('CommentRepository') private commentRepository: CommentRepository
    ) {}

    async execute(id: string): Promise<ResponseClassDTO> {
        const existsSchema = await this.classRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Class id ${id} not found!`, 404);
        }

        const limit = 3;

        const existsComments = await this.commentRepository.findSomeByClassIdAndLimit(String(existsSchema._id), limit);

        if (existsComments.length) {
            const comments: any[] = [];

            existsComments.forEach(({ _id, comment, date_created }) => {
                const cmt = {
                    _id,
                    comment,
                    date_created,
                };

                comments.push(cmt);
            });

            Object.assign(existsSchema, { comments });
        }

        return {
            result: existsSchema,
        };
    }
}
