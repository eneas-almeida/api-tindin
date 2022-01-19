import { ResponseClassDTO } from '@modules/classes/dtos/ReponseClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { AppException } from '@shared/exceptions/AppException';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteClassService {
    constructor(@inject('ClassRepository') private classRepository: ClassRepository) {}

    async execute(id: string): Promise<ResponseClassDTO> {
        const existsSchema = await this.classRepository.findOneById(id);

        if (!existsSchema) {
            throw new AppException(`Class id ${id} not found!`, 404);
        }

        await this.classRepository.delete(existsSchema);

        return {
            result: existsSchema,
        };
    }
}
