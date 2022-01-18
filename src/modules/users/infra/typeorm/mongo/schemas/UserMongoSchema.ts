import { User } from '@modules/users/schemas/User';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class UserMongoSchema implements User {
    @ObjectIdColumn()
    public _id: ObjectID;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;
}
