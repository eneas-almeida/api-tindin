import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { UpdateClassController } from './UpdateClassController';

export class UpdateClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new UpdateClassController();

        router[method](path, authenticate, handle);
    }
}
