import { ClassRoutes } from '@modules/classes/infra/routes/ClassRoutes';
import { CommentRoutes } from '@modules/comments/infra/routes/CommentRoutes';
import { UserRoutes } from '@modules/users/infra/routes/UserRoutes';
import { Router } from 'express';

class Route {
    public execute(): Router {
        const router: Router = Router();

        // USER
        new UserRoutes().registerAll(router);

        // CLASSE
        new ClassRoutes().registerAll(router);

        // COMMENT
        new CommentRoutes().registerAll(router);

        return router;
    }
}

const route = new Route();

export { route };
