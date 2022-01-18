import { Router } from 'express';
import { DeleteClasseController } from './DeleteClasseController';

export class DeleteClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new DeleteClasseController();

        router[method](path, handle);
    }
}
