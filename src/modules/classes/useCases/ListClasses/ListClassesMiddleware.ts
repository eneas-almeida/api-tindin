import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { ListClassesController } from './ListClassesController';

export class ListClassesMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new ListClassesController();

        router[method](path, authenticate, handle);
    }
}
