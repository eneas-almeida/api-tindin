import { CreateClasseDTO } from '@modules/classes/dtos/CreateClasseDTO';
import { ResponseClasseDTO } from '@modules/classes/dtos/ReponseClasseDTO';
import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateClasseService {
    constructor(@inject('ClasseRepository') private classeRepository: ClasseRepository) {}

    async execute(createClasseDTO: CreateClasseDTO): Promise<ResponseClasseDTO> {
        const { name } = createClasseDTO;

        const existsSchema = await this.classeRepository.findOneByName(name);

        if (existsSchema) {
            throw new AppException(`Classe name ${name} already exists!`, 400);
        }

        const schemaCreated = await this.classeRepository.create(createClasseDTO);

        return {
            result: schemaCreated,
        };
    }
}
