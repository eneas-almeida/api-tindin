import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListClassesService } from './ListClassesService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class ListClassesController {
    public async handle(_: Request, res: Response): Promise<Response> {
        const listClassesService = container.resolve(ListClassesService);

        const result = await listClassesService.execute();

        return res.status(StatusCode.OK).json(result);
    }
}
