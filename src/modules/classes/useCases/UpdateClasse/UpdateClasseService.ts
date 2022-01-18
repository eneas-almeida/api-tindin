import { ResponseClasseDTO } from '@modules/classes/dtos/ReponseClasseDTO';
import { UpdateClasseDTO } from '@modules/classes/dtos/UpdateClasseDTO';
import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateClasseService {
    constructor(@inject('ClasseRepository') private classeRepository: ClasseRepository) {}

    async execute(updateClasseDTO: UpdateClasseDTO, id: string): Promise<ResponseClasseDTO> {
        const existsSchema = await this.classeRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Classe id ${id} not found!`, 400);
        }

        Object.assign(existsSchema, updateClasseDTO);

        const schemaSaved = await this.classeRepository.save(existsSchema);

        return {
            result: schemaSaved,
        };
    }
}
