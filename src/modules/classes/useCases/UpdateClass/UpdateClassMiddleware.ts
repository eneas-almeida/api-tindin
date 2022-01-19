import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { UpdateClassController } from './UpdateClassController';
import { UpdateClassValidator } from './UpdateClassValidator';

export class UpdateClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { validate } = new UpdateClassValidator();
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new UpdateClassController();

        router[method](path, validate, authenticate, handle);
    }
}
