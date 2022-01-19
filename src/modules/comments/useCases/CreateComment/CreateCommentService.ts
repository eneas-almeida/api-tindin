import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { CreateCommentDTO } from '@modules/comments/dtos/CreateCommentDTO';
import { ResponseCommentDTO } from '@modules/comments/dtos/ReponseCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { StatusCode } from '@shared/helpers/StatusCode';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateCommentService {
    constructor(
        @inject('CommentRepository') private commentRepository: CommentRepository,
        @inject('ClassRepository') private classRepository: ClassRepository
    ) {}

    async execute(createCommentDTO: CreateCommentDTO): Promise<ResponseCommentDTO> {
        const { id_class } = createCommentDTO;

        const existsSchema = await this.classRepository.findOneById(id_class);

        if (!existsSchema) {
            throw new AppException(`Classe id ${id_class} not found!`, StatusCode.NOT_FOUND);
        }

        const schemaCreated = await this.commentRepository.create(createCommentDTO);

        await this.classRepository.updateValueTotalComment(existsSchema, 1);

        return {
            result: schemaCreated,
        };
    }
}
