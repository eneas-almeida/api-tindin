import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { DeleteClassService } from './DeleteClasseService';

let classRepository: ClassRepository;
let commentRepository: CommentRepository;
let deleteClassService: DeleteClassService;

describe('DeleteClassService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        commentRepository = new CommentRepositoryInMemory();
        deleteClassService = new DeleteClassService(classRepository, commentRepository);
    });

    // TEST 1

    it('should be delete a comments', async () => {
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

        const classDeleted = await deleteClassService.execute(classCreated._id);

        expect(classDeleted).toHaveProperty('result._id');
    });

    // TEST 2

    it('should be not delete a class', async () => {
        await expect(deleteClassService.execute('61e7b0d3df858ff94da412ca')).rejects.toBeInstanceOf(AppException);
    });
});
