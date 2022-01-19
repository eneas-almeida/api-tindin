import { ResponseClassDTO } from '@modules/classes/dtos/ReponseClassDTO';
import { UpdateClassDTO } from '@modules/classes/dtos/UpdateClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateClassService {
    constructor(@inject('ClassRepository') private classRepository: ClassRepository) {}

    async execute(updateClassDTO: UpdateClassDTO, id: string): Promise<ResponseClassDTO> {
        const existsSchema = await this.classRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Class id ${id} not found!`, 400);
        }

        Object.assign(existsSchema, updateClassDTO);

        const schemaSaved = await this.classRepository.save(existsSchema);

        return {
            result: schemaSaved,
        };
    }
}
