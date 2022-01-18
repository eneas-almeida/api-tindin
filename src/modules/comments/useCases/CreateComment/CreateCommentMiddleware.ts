import { Router } from 'express';
import { CreateCommentController } from './CreateCommentController';

export class CreateCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new CreateCommentController();

        router[method](path, handle);
    }
}
