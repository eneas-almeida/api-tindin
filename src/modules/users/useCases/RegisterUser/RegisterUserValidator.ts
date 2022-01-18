import { Request, Response, NextFunction } from 'express';

import { isEmailValid, isPasswordValid } from '@shared/helpers/validator';
import { AppException } from '@shared/exceptions/AppException';
import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';

class RegisterUserValidator {
    public validate(req: Request, _: Response, next: NextFunction): any {
        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password,
        } as CreateUserDTO; // important, force typing!

        if (!isEmailValid(data.email)) {
            throw new AppException(`Email ${email} invalid!`, 400);
        }

        if (!isPasswordValid(data.password)) {
            throw new AppException('Password invalid!', 400);
        }

        return next();
    }
}

export { RegisterUserValidator };
