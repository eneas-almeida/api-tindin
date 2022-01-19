import { ReponseListClassDTO } from '@modules/classes/dtos/ReponseListClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListClassesService {
    constructor(
        @inject('ClassRepository') private classRepository: ClassRepository,
        @inject('CommentRepository') private commentRepository: CommentRepository
    ) {}

    async execute(): Promise<ReponseListClassDTO> {
        const classes = await this.classRepository.list();

        for (const _class of classes) {
            const limit = 1;

            const existsComments = await this.commentRepository.findSomeByClassIdAndLimit(String(_class._id), limit);

            let last_comment = null,
                last_comment_date = null;

            if (existsComments.length) {
                const { _id, comment, date_created } = existsComments[0];

                last_comment = {
                    _id,
                    comment,
                    date_created,
                };

                last_comment_date = date_created;
            }

            Object.assign(_class, { last_comment, last_comment_date });
        }

        return { result: classes };
    }
}
