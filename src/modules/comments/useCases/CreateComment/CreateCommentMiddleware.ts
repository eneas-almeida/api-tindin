import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { CreateCommentController } from './CreateCommentController';
import { CreateCommentValidator } from './CreateCommentValidator';

export class CreateCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { validate } = new CreateCommentValidator();
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new CreateCommentController();

        router[method](path, validate, authenticate, handle);
    }
}
