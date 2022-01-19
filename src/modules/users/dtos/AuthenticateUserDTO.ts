import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthenticateUserDTO {
    @IsEmail({ message: 'email invalid!' })
    @IsNotEmpty({ message: 'email not empty!' })
    email: string;

    @IsNotEmpty({ message: 'password not empty!' })
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    static create(email: string, password: string) {
        return new AuthenticateUserDTO(email, password);
    }
}
