import { CreateClassDTO } from '@modules/classes/dtos/CreateClassDTO';
import { ClassRepository } from '@modules/classes/repositories/ClassRepository';
import { Class } from '@modules/classes/schemas/Class';
import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { ClassMongoSchema } from '../schemas/ClassMongoSchema';

export class ClassMongoRepository implements ClassRepository {
    private repository: MongoRepository<Class>;

    constructor() {
        this.repository = getMongoRepository(ClassMongoSchema, 'mongodb');
    }

    async findOneById(id: string): Promise<Class | undefined> {
        return await this.repository.findOne({ _id: new ObjectID(id) });
    }

    async findOneByName(name: string): Promise<Class | undefined> {
        return await this.repository.findOne({ name });
    }

    async create(createClassDTO: CreateClassDTO): Promise<Class> {
        const schemaCreated = this.repository.create(createClassDTO);

        await this.repository.save(schemaCreated);

        return schemaCreated;
    }

    async save(classe: Class): Promise<Class> {
        classe.date_updated = new Date();

        await this.repository.save(classe);

        return classe;
    }

    async list(): Promise<Class[]> {
        return await this.repository.find();
    }

    async delete(classe: Class): Promise<Class> {
        await this.repository.delete(classe);

        return classe;
    }
}
