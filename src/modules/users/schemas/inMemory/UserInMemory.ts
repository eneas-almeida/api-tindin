import { User } from '@modules/users/schemas/User';

export class UserInMemory implements User {
    _id: string;
    name: string;
    email: string;
    password: string;
}
