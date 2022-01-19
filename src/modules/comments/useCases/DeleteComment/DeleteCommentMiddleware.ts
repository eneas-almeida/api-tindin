import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { DeleteCommentController } from './DeleteCommentController';

export class DeleteCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new DeleteCommentController();

        router[method](path, authenticate, handle);
    }
}
