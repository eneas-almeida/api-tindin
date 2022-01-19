import { ResponseClassDTO } from '@modules/classes/dtos/ReponseClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { StatusCode } from '@shared/helpers/StatusCode';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteClassService {
    constructor(
        @inject('ClassRepository') private classRepository: ClassRepository,
        @inject('CommentRepository') private commentRepository: CommentRepository
    ) {}

    async execute(id: string): Promise<ResponseClassDTO> {
        const existsSchema = await this.classRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Class id ${id} not found!`, StatusCode.NOT_FOUND);
        }

        const comments = await this.commentRepository.findSomeByClassId(String(existsSchema._id));

        if (comments.length) {
            const ids: string[] = [];

            comments.forEach((e) => ids.push(e.id_class));

            await this.commentRepository.deleteAll(ids);
        }

        await this.classRepository.delete(existsSchema);

        return {
            result: existsSchema,
        };
    }
}
