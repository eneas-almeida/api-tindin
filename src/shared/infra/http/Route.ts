import { Router } from 'express';

class Route {
    public execute(): Router {
        const router: Router = Router();

        return router;
    }
}

const route = new Route();

export { route };
