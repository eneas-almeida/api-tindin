import { AppException } from '@shared/exceptions/AppException';
import { isEmailValid } from '@shared/helpers/validator';
import { NextFunction, Request, Response } from 'express';

export class AuthenticateUserValidator {
    public validate(req: Request, _: Response, next: NextFunction): any {
        const { email, password } = req.body;

        if (!isEmailValid(email)) {
            throw new AppException('Email invalid!', 403);
        }

        if (!password) {
            throw new AppException('Password invalid!', 403);
        }

        return next();
    }
}
