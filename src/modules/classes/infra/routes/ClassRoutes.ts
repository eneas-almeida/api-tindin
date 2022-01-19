import { CreateClassMiddleware } from '@modules/classes/useCases/CreateClass/CreateClassMiddleware';
import { DeleteClassMiddleware } from '@modules/classes/useCases/DeleteClass/DeleteClassMiddleware';
import { ListClassesMiddleware } from '@modules/classes/useCases/ListClasses/ListClassesMiddleware';
import { ShowClassMiddleware } from '@modules/classes/useCases/ShowClass/ShowClassMiddleware';
import { UpdateClassMiddleware } from '@modules/classes/useCases/UpdateClass/UpdateClassMiddleware';
import { Router } from 'express';

export class ClassRoutes {
    public registerAll(router: Router): void {
        // Create
        new CreateClassMiddleware().register(router, 'post', '/classes');

        // List
        new ListClassesMiddleware().register(router, 'get', '/classes');

        // Show
        new ShowClassMiddleware().register(router, 'get', '/classes/:id');

        // Delete
        new DeleteClassMiddleware().register(router, 'delete', '/classes/:id');

        // Update
        new UpdateClassMiddleware().register(router, 'put', '/classes/:id');
    }
}
