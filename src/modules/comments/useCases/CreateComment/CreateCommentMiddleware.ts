import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { CreateCommentController } from './CreateCommentController';

export class CreateCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new CreateCommentController();

        router[method](path, authenticate, handle);
    }
}
