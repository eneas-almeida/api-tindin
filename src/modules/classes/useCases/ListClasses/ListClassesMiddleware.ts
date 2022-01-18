import { Router } from 'express';
import { ListClassesController } from './ListClassesController';

export class ListClassesMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new ListClassesController();

        router[method](path, handle);
    }
}
