import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListCommentsService } from './ListCommentsService';

export class ListCommentsController {
    public async handle(_: Request, res: Response): Promise<Response> {
        console.log('connnnnnnnnnnnn');
        console.log('connnnnnnnnnnnn');

        const listCommentsService = container.resolve(ListCommentsService);

        const result = await listCommentsService.execute();

        return res.status(200).json(result);
    }
}
