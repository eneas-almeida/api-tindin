import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty({ message: 'name not empty!' })
    name: string;

    @IsNotEmpty({ message: 'email not empty!' })
    @IsEmail({ message: 'email invalid!' })
    email: string;

    @IsNotEmpty({ message: 'password not empty!' })
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static create(name: string, email: string, password: string) {
        return new CreateUserDTO(name, email, password);
    }
}
