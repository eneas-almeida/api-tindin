import { v4 as uuid } from 'uuid';
import { CreateClasseDTO } from '@modules/classes/dtos/CreateClasseDTO';
import { Classe } from '@modules/classes/schemas/Classe';
import { ClasseInMemory } from '@modules/classes/schemas/inMemory/ClasseInMemory';
import { ClasseRepository } from '../ClasseRepository';
import { UpdateClasseDTO } from '@modules/classes/dtos/UpdateClasseDTO';

export class ClasseRepositoryInMemory implements ClasseRepository {
    private repository: Classe[];

    constructor() {
        this.repository = [];
    }

    async findOneById(id: string): Promise<Classe | undefined> {
        return this.repository.find((classe) => classe._id === id);
    }

    async findOneByName(name: string): Promise<Classe | undefined> {
        return this.repository.find((classe) => classe.name === name);
    }

    async create(createClasseDTO: CreateClasseDTO): Promise<Classe> {
        const classe = new ClasseInMemory();

        classe._id = uuid();

        Object.assign(classe, createClasseDTO);

        this.repository.push(classe);

        return classe;
    }

    async save(classe: Classe): Promise<Classe> {
        const index = this.repository.indexOf(classe);

        if (index !== -1) {
            classe.date_updated = new Date();

            this.repository[index] = classe;
        }

        return classe;
    }

    async list(): Promise<Classe[]> {
        return this.repository;
    }

    async delete(classe: Classe): Promise<Classe> {
        const index = this.repository.indexOf(classe);

        if (index !== -1) {
            this.repository.splice(index, 1);
        }

        return classe;
    }
}
