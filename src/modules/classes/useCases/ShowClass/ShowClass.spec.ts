import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { CommentRepository } from '@modules/comments/repositories/CommentRepository';
import { CommentRepositoryInMemory } from '@modules/comments/repositories/inMemory/CommentRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { ShowClassService } from './ShowClasseService';

let classRepository: ClassRepository;
let commentRepository: CommentRepository;
let showClassService: ShowClassService;

describe('ShowClassService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        commentRepository = new CommentRepositoryInMemory();
        showClassService = new ShowClassService(classRepository, commentRepository);
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

        await showClassService.execute(classCreated._id);
    });

    // Teste 2

    it('should be not show a class', async () => {
        await expect(showClassService.execute('61e7b0d3df858ff94da412ca')).rejects.toBeInstanceOf(AppException);
    });
});
