import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { AppException } from '@shared/exceptions/AppException';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export class RegisterUserValidator {
    async validate(req: Request, _: Response, next: NextFunction) {
        const { name, email, password } = req.body;

        const createUserDTO = CreateUserDTO.create(name, email, password);

        const existsErrors = await validate(createUserDTO);

        if (existsErrors.length) {
            const fields = existsErrors.map((e) => e.property).join(', ');

            throw new AppException(`Fields: ${fields}`, 400);
        }

        return next();
    }
}
