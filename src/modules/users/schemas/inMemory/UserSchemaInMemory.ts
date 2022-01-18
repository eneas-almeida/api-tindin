import { User } from '@modules/users/schemas/User';

export class UserSchemaInMemory implements User {
    _id: string;
    name: string;
    email: string;
    password: string;
}
