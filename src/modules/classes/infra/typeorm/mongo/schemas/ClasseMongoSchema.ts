import { Classe } from '@modules/classes/schemas/Classe';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity('classe')
export class ClasseMongoSchema implements Classe {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date_init: Date;

    @Column()
    date_end: Date;

    @CreateDateColumn()
    date_created: Date;

    @UpdateDateColumn()
    date_updated: Date;

    @Column()
    total_comments: number;
}
