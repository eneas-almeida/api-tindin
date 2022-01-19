import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { ShowClassController } from './ShowClassController';

export class ShowClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new ShowClassController();

        router[method](path, authenticate, handle);
    }
}
