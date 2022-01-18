import { CreateClasseMiddleware } from '@modules/classes/useCases/CreateClasse/CreateClasseMiddleware';
import { DeleteClasseMiddleware } from '@modules/classes/useCases/DeleteClasse/DeleteClasseMiddleware';
import { ListClassesMiddleware } from '@modules/classes/useCases/ListClasses/ListClassesMiddleware';
import { ShowClasseMiddleware } from '@modules/classes/useCases/ShowClasse/ShowClasseMiddleware';
import { UpdateClasseMiddleware } from '@modules/classes/useCases/UpdateClasse/UpdateClasseMiddleware';
import { Router } from 'express';

export class ClasseRoutes {
    public registerAll(router: Router): void {
        // Create
        new CreateClasseMiddleware().register(router, 'post', '/classes');

        // List
        new ListClassesMiddleware().register(router, 'get', '/classes');

        // Show
        new ShowClasseMiddleware().register(router, 'get', '/classes/:id');

        // Delete
        new DeleteClasseMiddleware().register(router, 'delete', '/classes/:id');

        // Update
        new UpdateClasseMiddleware().register(router, 'put', '/classes/:id');
    }
}
