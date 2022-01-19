import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { ShowCommentService } from './ShowCommentService';

let classRepository: ClassRepository;
let commentRepository: CommentRepository;
let showCommentService: ShowCommentService;

describe('ShowCommentService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        commentRepository = new CommentRepositoryInMemory();
        showCommentService = new ShowCommentService(commentRepository);
    });

    // TEST 1

    it('should be show a comment', async () => {
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

        await showCommentService.execute(comment._id);
    });

    // Teste 2

    it('should be not show a comment', async () => {
        await expect(showCommentService.execute('61e7b0d3df858ff94da412ca')).rejects.toBeInstanceOf(AppException);
    });
});
