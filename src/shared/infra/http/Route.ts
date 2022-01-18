import { UserRoutes } from '@modules/users/infra/routes/UserRoutes';
import { Router } from 'express';

class Route {
    public execute(): Router {
        const router: Router = Router();

        // USER
        new UserRoutes().registerAll(router);

        return router;
    }
}

const route = new Route();

export { route };
