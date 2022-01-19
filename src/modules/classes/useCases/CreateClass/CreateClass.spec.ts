import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { CreateClassService } from './CreateClassService';

let classRepository: ClassRepository;
let createClassService: CreateClassService;

describe('CreateClassService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        createClassService = new CreateClassService(classRepository);
    });

    // TEST 1

    it('should be create a new class', async () => {
        const class_ = await createClassService.execute({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        expect(class_).toHaveProperty('result._id');
    });

    // TEST 2

    it('should be not create a new class', async () => {
        const nameToConflict = 'Quimica';

        await classRepository.create({
            name: nameToConflict,
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        await expect(
            createClassService.execute({
                name: nameToConflict,
                description: 'aula de quimmica',
                video: 'http://www.video.com',
                date_init: new Date('12-23-2001'),
                date_end: new Date('12-24-2001'),
            })
        ).rejects.toBeInstanceOf(AppException);
    });
});
