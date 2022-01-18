import { CreateCommentMiddleware } from '@modules/comments/useCases/CreateComment/CreateCommentMiddleware';
import { DeleteCommentMiddleware } from '@modules/comments/useCases/DeleteComment/DeleteCommentMiddleware';
import { ListCommentsMiddleware } from '@modules/comments/useCases/ListComments/ListCommentsMiddleware';
import { ShowCommentMiddleware } from '@modules/comments/useCases/ShowComment/ShowCommentMiddleware';
import { Router } from 'express';

export class CommentRoutes {
    public registerAll(router: Router): void {
        // Create
        new CreateCommentMiddleware().register(router, 'post', '/classes/comments');

        // List
        new ListCommentsMiddleware().register(router, 'get', '/comments');

        // Show
        new ShowCommentMiddleware().register(router, 'get', '/classes/comments/:id');

        // Delete
        new DeleteCommentMiddleware().register(router, 'delete', '/classes/comments/:id');
    }
}
