import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteCommentService } from './DeleteCommentService';

export class DeleteCommentController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const commentId = req.params.id;

        const deleteCommentService = container.resolve(DeleteCommentService);

        const result = await deleteCommentService.execute(commentId);

        return res.status(200).json(result);
    }
}
