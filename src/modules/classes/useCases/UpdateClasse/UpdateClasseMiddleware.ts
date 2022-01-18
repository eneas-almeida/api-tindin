import { Router } from 'express';
import { UpdateClasseController } from './UpdateClasseController';

export class UpdateClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new UpdateClasseController();

        router[method](path, handle);
    }
}
