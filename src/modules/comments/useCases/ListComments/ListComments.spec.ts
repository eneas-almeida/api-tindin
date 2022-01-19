import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { ListCommentsService } from './ListCommentsService';

let commentRepository: CommentRepository;
let classRepository: ClassRepository;
let listCommentsService: ListCommentsService;

describe('ListCommentsService', () => {
    beforeEach(() => {
        commentRepository = new CommentRepositoryInMemory();
        classRepository = new ClassRepositoryInMemory();
        listCommentsService = new ListCommentsService(commentRepository);
    });

    // TEST 1

    it('should be list a comments', async () => {
        const classCreated = await classRepository.create({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        await commentRepository.create({
            id_class: classCreated._id,
            comment: 'comment 1',
        });

        await commentRepository.create({
            id_class: classCreated._id,
            comment: 'comment 2',
        });

        await listCommentsService.execute();
    });
});
