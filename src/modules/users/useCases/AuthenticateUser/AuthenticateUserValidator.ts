import { AuthenticateUserDTO } from '@modules/users/dtos/AuthenticateUserDTO';
import { AppException } from '@shared/exceptions/AppException';
import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';

export class AuthenticateUserValidator {
    async validate(req: Request, _: Response, next: NextFunction) {
        const { email, password } = req.body;

        const authenticateUserDTO = AuthenticateUserDTO.create(email, password);

        const existsErrors = await validate(authenticateUserDTO);

        if (existsErrors.length) {
            const fields = existsErrors.map((e) => e.property).join(', ');

            throw new AppException(`Fields: ${fields}`, 400);
        }

        return next();
    }
}
