import { CreateCommentDTO } from '@modules/comments/dtos/CreateCommentDTO';
import { ResponseCommentDTO } from '@modules/comments/dtos/ReponseCommentDTO';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateCommentService {
    constructor(
        @inject('CommentRepository') private commentRepository: CommentRepository,
        @inject('ClassRepository') private classRepository: CommentRepository
    ) {}

    async execute(createCommentDTO: CreateCommentDTO): Promise<ResponseCommentDTO> {
        const { id_class } = createCommentDTO;

        const existsClasseSchema = await this.classRepository.findOneById(id_class);

        if (!existsClasseSchema) {
            throw new AppException(`Classe id ${id_class} not found!`, 404);
        }

        const schemaCreated = await this.commentRepository.create(createCommentDTO);

        return {
            result: schemaCreated,
        };
    }
}
