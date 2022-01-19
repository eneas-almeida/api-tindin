import { CreateClassDTO } from '@modules/classes/dtos/CreateClassDTO';
import { ResponseClassDTO } from '@modules/classes/dtos/ReponseClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { AppException } from '@shared/exceptions/AppException';
import { StatusCode } from '@shared/helpers/StatusCode';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateClassService {
    constructor(@inject('ClassRepository') private classRepository: ClassRepository) {}

    async execute(createClassDTO: CreateClassDTO): Promise<ResponseClassDTO> {
        const { name } = createClassDTO;

        const existsSchema = await this.classRepository.findOneByName(name);

        if (existsSchema) {
            throw new AppException(`Class name ${name} already exists!`, StatusCode.CONFLICT);
        }

        createClassDTO.date_init = new Date(createClassDTO.date_init);

        createClassDTO.date_end = new Date(createClassDTO.date_end);

        Object.assign(createClassDTO, { total_comments: 0 });

        const schemaCreated = await this.classRepository.create(createClassDTO);

        return {
            result: schemaCreated,
        };
    }
}
