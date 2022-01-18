import { AppException } from '@shared/exceptions/AppException';
import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { TokenProvider } from '../providers/TokenProvider/models/TokenProvider';

export class AuthUserMiddleware {
    public authenticate(req: Request, _: Response, next: NextFunction): any {
        const schemaToken: string | undefined = req.headers.authorization;

        if (!schemaToken) {
            throw new AppException('Token not provided!', 404);
        }

        const parts: string[] = schemaToken.split(' ');

        if (parts.length !== 2) {
            throw new AppException('Token parts invalid!', 403);
        }

        const [schema, token] = parts;

        if (schema !== 'Bearer') {
            throw new AppException('Token parts invalid!', 403);
        }

        const tokenProvider = container.resolve<TokenProvider>('TokenProvider');

        const payload = tokenProvider.validateToken(token);

        req.auth = payload.user;

        return next();
    }
}
