import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { ListCommentsController } from './ListCommentsController';

export class ListCommentsMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new ListCommentsController();

        router[method](path, authenticate, handle);
    }
}
