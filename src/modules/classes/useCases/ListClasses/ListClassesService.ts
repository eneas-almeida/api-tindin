import { ReponseListClasseDTO } from '@modules/classes/dtos/ReponseListClasseDTO';
import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListClassesService {
    constructor(@inject('ClasseRepository') private classeRepository: ClasseRepository) {}

    async execute(): Promise<ReponseListClasseDTO> {
        const result = await this.classeRepository.list();

        return { result };
    }
}
