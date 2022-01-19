import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteCommentService } from './DeleteCommentService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class DeleteCommentController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const commentId = req.params.id;

        const deleteCommentService = container.resolve(DeleteCommentService);

        const result = await deleteCommentService.execute(commentId);

        return res.status(StatusCode.OK).json(result);
    }
}
