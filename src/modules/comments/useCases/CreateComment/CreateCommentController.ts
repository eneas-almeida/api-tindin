import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCommentService } from './CreateCommentService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class CreateCommentController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { id_class, comment } = req.body;

        const createCommentService = container.resolve(CreateCommentService);

        const data = {
            id_class,
            comment,
        };

        const result = await createCommentService.execute(data);

        return res.status(StatusCode.CREATED).json(result);
    }
}
