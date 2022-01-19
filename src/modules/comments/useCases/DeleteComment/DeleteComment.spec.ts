import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { DeleteCommentService } from './DeleteCommentService';

let classRepository: ClassRepository;
let commentRepository: CommentRepository;
let deleteCommentService: DeleteCommentService;

describe('DeleteCommentService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        commentRepository = new CommentRepositoryInMemory();
        deleteCommentService = new DeleteCommentService(commentRepository, classRepository);
    });

    // TEST 1

    it('should be delete a comment', async () => {
        const classCreated = await classRepository.create({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        const comment = await commentRepository.create({
            id_class: classCreated._id,
            comment: 'comment 1',
        });

        const commentDeleted = await deleteCommentService.execute(comment._id);

        expect(commentDeleted.result).toHaveProperty('_id');
    });

    // TEST 2

    it('should be not delete a comment', async () => {
        const idCommentToConflict = '61e7952ab7b18add1344cde7';

        await expect(deleteCommentService.execute(idCommentToConflict)).rejects.toBeInstanceOf(AppException);
    });
});
