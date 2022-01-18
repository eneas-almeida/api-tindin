import { ResponseClasseDTO } from '@modules/classes/dtos/ReponseClasseDTO';
import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ShowClasseService {
    constructor(@inject('ClasseRepository') private classeRepository: ClasseRepository) {}

    async execute(id: string): Promise<ResponseClasseDTO> {
        const existsSchema = await this.classeRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Classe id ${id} not found!`, 404);
        }

        return {
            result: existsSchema,
        };
    }
}
