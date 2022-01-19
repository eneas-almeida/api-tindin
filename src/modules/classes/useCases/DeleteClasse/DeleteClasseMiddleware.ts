import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { DeleteClasseController } from './DeleteClasseController';

export class DeleteClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new DeleteClasseController();

        router[method](path, authenticate, handle);
    }
}
