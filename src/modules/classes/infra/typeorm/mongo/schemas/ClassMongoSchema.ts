import { Class } from '@modules/classes/schemas/Class';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity('class')
export class ClassMongoSchema implements Class {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video: string;

    @Column()
    date_init: Date;

    @Column()
    date_end: Date;

    @Column()
    total_comments: number;

    @CreateDateColumn()
    date_created: Date;

    @UpdateDateColumn()
    date_updated: Date;
}
