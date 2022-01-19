import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { ShowCommentController } from './ShowCommentController';

export class ShowCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new ShowCommentController();

        router[method](path, authenticate, handle);
    }
}
