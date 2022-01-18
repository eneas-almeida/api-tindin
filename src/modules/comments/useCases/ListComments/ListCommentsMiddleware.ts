import { Router } from 'express';
import { ListCommentsController } from './ListCommentsController';

export class ListCommentsMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new ListCommentsController();

        router[method](path, handle);
    }
}
