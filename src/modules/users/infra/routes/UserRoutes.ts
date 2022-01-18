import { AuthenticateUserMiddleware } from '@modules/users/useCases/AuthenticateUser/AuthenticateUserMiddleware';
import { RegisterUserMiddleware } from '@modules/users/useCases/RegisterUser/RegisterUserMiddleware';
import { Router } from 'express';

class UserRoutes {
    public registerAll(router: Router): void {
        // Login
        new AuthenticateUserMiddleware().register(router, 'post', '/users/login');

        // Register user
        new RegisterUserMiddleware().register(router, 'post', '/users');
    }
}

export { UserRoutes };
