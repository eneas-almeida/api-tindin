import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { CreateCommentService } from './CreateCommentService';

let commentRepository: CommentRepository;
let classRepository: ClassRepository;
let createCommentService: CreateCommentService;

describe('CreateCommentService', () => {
    beforeEach(() => {
        commentRepository = new CommentRepositoryInMemory();
        classRepository = new ClassRepositoryInMemory();
        createCommentService = new CreateCommentService(commentRepository, classRepository);
    });

    // TEST 1

    it('should be create a new comment', async () => {
        const classCreated = await classRepository.create({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        const commentCreated = await createCommentService.execute({
            id_class: classCreated._id,
            comment: 'comment 1 aula de quimica',
        });

        expect(commentCreated.result).toHaveProperty('_id');
    });

    // TEST 2

    it('should be not create a new comment', async () => {
        const idToConflict = '61e7952ab7b18add1344cde7';

        await expect(
            createCommentService.execute({
                id_class: idToConflict,
                comment: 'comment 1 aula de quimica',
            })
        ).rejects.toBeInstanceOf(AppException);
    });
});
