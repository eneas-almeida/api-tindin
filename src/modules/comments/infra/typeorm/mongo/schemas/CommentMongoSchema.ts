import { Comment } from '@modules/comments/schemas/Comment';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('comment')
export class CommentMongoSchema implements Comment {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    id_class: string;

    @Column()
    comment: string;

    @CreateDateColumn()
    date_created: Date;
}
