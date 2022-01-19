import { CreateClassDTO } from '../dtos/CreateClassDTO';
import { Class } from '../schemas/Class';

export interface ClassRepository {
    findOneById(id: string): Promise<Class | undefined>;

    findOneByName(name: string): Promise<Class | undefined>;

    create(createClassDTO: CreateClassDTO): Promise<Class>;

    save(classe: Class): Promise<Class>;

    list(): Promise<Class[]>;

    delete(classe: Class): Promise<Class>;
}
