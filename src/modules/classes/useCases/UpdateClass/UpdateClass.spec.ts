import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { ClassRepositoryInMemory } from '@modules/classes/repositories/inMemory/ClassRepositoryInMemory';
import { AppException } from '@shared/exceptions/AppException';
import { UpdateClassService } from './UpdateClassService';

let classRepository: ClassRepository;
let updateClassService: UpdateClassService;

describe('UpdateClassService', () => {
    beforeEach(() => {
        classRepository = new ClassRepositoryInMemory();
        updateClassService = new UpdateClassService(classRepository);
    });

    // TEST 1

    it('should be update a class', async () => {
        const classCreated = await classRepository.create({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        const class_ = await updateClassService.execute(
            {
                name: 'Fisica',
                description: 'aula de quimmica',
                video: 'http://www.video.com',
                date_init: new Date('12-23-2001'),
                date_end: new Date('12-24-2001'),
            },
            classCreated._id
        );

        expect(class_).toHaveProperty('result._id');

        expect('Fisica').toBe(class_.result.name);
    });

    // TEST 2

    it('should be not update a class', async () => {
        await classRepository.create({
            name: 'Quimica',
            description: 'aula de quimmica',
            video: 'http://www.video.com',
            date_init: new Date('12-23-2001'),
            date_end: new Date('12-24-2001'),
        });

        const idNotValid = '61e7b0d3df858ff94da412ca';

        await expect(
            updateClassService.execute(
                {
                    name: 'Fisica',
                    description: 'aula de quimmica',
                    video: 'http://www.video.com',
                    date_init: new Date('12-23-2001'),
                    date_end: new Date('12-24-2001'),
                },
                idNotValid
            )
        ).rejects.toBeInstanceOf(AppException);
    });
});
