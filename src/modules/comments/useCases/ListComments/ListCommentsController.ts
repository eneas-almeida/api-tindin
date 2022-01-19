import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCommentsService } from './ListCommentsService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class ListCommentsController {
    public async handle(_: Request, res: Response): Promise<Response> {
        const listCommentsService = container.resolve(ListCommentsService);

        const result = await listCommentsService.execute();

        return res.status(StatusCode.OK).json(result);
    }
}
