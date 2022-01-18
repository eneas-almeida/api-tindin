import { Router } from 'express';
import { ShowClasseController } from './ShowClasseController';

export class ShowClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new ShowClasseController();

        router[method](path, handle);
    }
}
