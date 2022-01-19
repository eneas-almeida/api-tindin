import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { DeleteClassController } from './DeleteClassController';

export class DeleteClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new DeleteClassController();

        router[method](path, authenticate, handle);
    }
}
