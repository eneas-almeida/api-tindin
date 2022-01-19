import { CreateClassDTO } from '@modules/classes/dtos/CreateClassDTO';
import { Class } from '@modules/classes/schemas/Class';
import { ClassInMemory } from '@modules/classes/schemas/inMemory/ClassInMemory';
import 'reflect-metadata';
import { v4 as uuid } from 'uuid';
import { ClassRepository } from '../ClassRepository';

export class ClassRepositoryInMemory implements ClassRepository {
    private repository: Class[];

    constructor() {
        this.repository = [];
    }

    async findOneById(id: string): Promise<Class | undefined> {
        return this.repository.find((class_) => class_._id === id);
    }

    async findOneByName(name: string): Promise<Class | undefined> {
        return this.repository.find((class_) => class_.name === name);
    }

    async create(createClassDTO: CreateClassDTO): Promise<Class> {
        const class_ = new ClassInMemory();

        class_._id = uuid();

        Object.assign(class_, createClassDTO);

        this.repository.push(class_);

        return class_;
    }

    async updateValueTotalComment(class_: Class, value: number): Promise<void> {
        const index = this.repository.indexOf(class_);

        if (index !== -1) {
            const count = class_.total_comments;

            Object.assign(class_, { total_comments: count + value });

            this.repository[index] = class_;
        }
    }

    async save(class_: Class): Promise<Class> {
        const index = this.repository.indexOf(class_);

        if (index !== -1) {
            class_.date_updated = new Date();

            this.repository[index] = class_;
        }

        return class_;
    }

    async list(): Promise<Class[]> {
        return this.repository;
    }

    async delete(class_: Class): Promise<Class> {
        const index = this.repository.indexOf(class_);

        if (index !== -1) {
            this.repository.splice(index, 1);
        }

        return class_;
    }
}
