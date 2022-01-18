import { Router } from 'express';
import { CreateClasseController } from './CreateClasseController';

export class CreateClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { handle } = new CreateClasseController();

        router[method](path, handle);
    }
}
