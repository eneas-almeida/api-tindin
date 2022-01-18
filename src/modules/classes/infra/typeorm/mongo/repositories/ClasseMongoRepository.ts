import { CreateClasseDTO } from '@modules/classes/dtos/CreateClasseDTO';
import { ClasseRepository } from '@modules/classes/repositories/ClasseRepository';
import { Classe } from '@modules/classes/schemas/Classe';
import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';
import { ClasseMongoSchema } from '../schemas/ClasseMongoSchema';

export class ClasseMongoRepository implements ClasseRepository {
    private repository: MongoRepository<Classe>;

    constructor() {
        this.repository = getMongoRepository(ClasseMongoSchema, 'mongodb');
    }

    async findOneById(id: string): Promise<Classe | undefined> {
        return await this.repository.findOne({ _id: new ObjectID(id) });
    }

    async findOneByName(name: string): Promise<Classe | undefined> {
        return await this.repository.findOne({ name });
    }

    async create(createClasseDTO: CreateClasseDTO): Promise<Classe> {
        const schemaCreated = this.repository.create(createClasseDTO);

        await this.repository.save(schemaCreated);

        return schemaCreated;
    }

    async save(classe: Classe): Promise<Classe> {
        classe.date_updated = new Date();

        await this.repository.save(classe);

        return classe;
    }

    async list(): Promise<Classe[]> {
        return await this.repository.find();
    }

    async delete(classe: Classe): Promise<Classe> {
        await this.repository.delete(classe);

        return classe;
    }
}
