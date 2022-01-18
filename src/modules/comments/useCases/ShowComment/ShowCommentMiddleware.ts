import { Router } from 'express';
import { ShowCommentController } from './ShowCommentController';

export class ShowCommentMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new ShowCommentController();

        router[method](path, handle);
    }
}
