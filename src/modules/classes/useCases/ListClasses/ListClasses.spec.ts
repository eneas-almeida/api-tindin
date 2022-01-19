import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { ListClassesService } from './ListClassesService';

let classRepository: ClassRepository;
let commentRepository: CommentRepository;
let deleteClassService: ListClassesService;

describe('ListClassesService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        commentRepository = new CommentRepositoryInMemory();
        deleteClassService = new ListClassesService(classRepository, commentRepository);
    });

    // TEST 1

    it('should be list a classes', async () => {
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

        await deleteClassService.execute();
    });
});
