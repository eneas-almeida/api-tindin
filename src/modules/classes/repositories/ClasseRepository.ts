import { CreateClasseDTO } from '../dtos/CreateClasseDTO';
import { UpdateClasseDTO } from '../dtos/UpdateClasseDTO';
import { Classe } from '../schemas/Classe';

export interface ClasseRepository {
    findOneById(id: string): Promise<Classe | undefined>;

    findOneByName(name: string): Promise<Classe | undefined>;

    create(createClasseDTO: CreateClasseDTO): Promise<Classe>;

    save(classe: Classe): Promise<Classe>;

    list(): Promise<Classe[]>;

    delete(classe: Classe): Promise<Classe>;
}
