import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ShowClasseService } from './ShowClasseService';

export class ShowClasseController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classId = req.params.id;

        const showClasseService = container.resolve(ShowClasseService);

        const result = await showClasseService.execute(classId);

        return res.status(200).json(result);
    }
}
