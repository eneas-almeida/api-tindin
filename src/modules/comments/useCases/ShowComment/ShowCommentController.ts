import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ShowCommentService } from './ShowCommentService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class ShowCommentController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const commentId = req.params.id;

        const showCommentService = container.resolve(ShowCommentService);

        const result = await showCommentService.execute(commentId);

        return res.status(StatusCode.OK).json(result);
    }
}
