import { v4 as uuid } from 'uuid';
import { CreateClassDTO } from '@modules/classes/dtos/CreateClassDTO';
import { Class } from '@modules/classes/schemas/Class';
import { ClassInMemory } from '@modules/classes/schemas/inMemory/ClassInMemory';
import { ClassRepository } from '../ClassRepository';
import { UpdateClassDTO } from '@modules/classes/dtos/UpdateClassDTO';

export class ClassRepositoryInMemory implements ClassRepository {
    private repository: Class[];

    constructor() {
        this.repository = [];
    }

    async updateValueTotalComment(class_: Class, value: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async findOneById(id: string): Promise<Class | undefined> {
        return this.repository.find((classe) => classe._id === id);
    }

    async findOneByName(name: string): Promise<Class | undefined> {
        return this.repository.find((classe) => classe.name === name);
    }

    async create(createClassDTO: CreateClassDTO): Promise<Class> {
        const classe = new ClassInMemory();

        classe._id = uuid();

        Object.assign(classe, createClassDTO);

        this.repository.push(classe);

        return classe;
    }

    async save(classe: Class): Promise<Class> {
        const index = this.repository.indexOf(classe);

        if (index !== -1) {
            classe.date_updated = new Date();

            this.repository[index] = classe;
        }

        return classe;
    }

    async list(): Promise<Class[]> {
        return this.repository;
    }

    async delete(classe: Class): Promise<Class> {
        const index = this.repository.indexOf(classe);

        if (index !== -1) {
            this.repository.splice(index, 1);
        }

        return classe;
    }
}
