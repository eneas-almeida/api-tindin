import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ShowClassService } from './ShowClasseService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class ShowClassController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classId = req.params.id;

        const showClassService = container.resolve(ShowClassService);

        const result = await showClassService.execute(classId);

        return res.status(StatusCode.OK).json(result);
    }
}
