import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListClassesService } from './ListClassesService';

export class ListClassesController {
    public async handle(_: Request, res: Response): Promise<Response> {
        const listClassesService = container.resolve(ListClassesService);

        const result = await listClassesService.execute();

        return res.status(200).json(result);
    }
}
