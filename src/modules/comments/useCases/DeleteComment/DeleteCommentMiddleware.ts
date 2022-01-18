import { Router } from 'express';
import { DeleteCommentController } from './DeleteCommentController';

export class DeleteCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new DeleteCommentController();

        router[method](path, handle);
    }
}
