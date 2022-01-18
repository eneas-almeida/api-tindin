import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateClasseService } from './UpdateClasseService';

export class UpdateClasseController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classeId = req.params.id;

        const { name, description, date_init, date_end } = req.body;

        const updateClasseService = container.resolve(UpdateClasseService);

        const data = {
            name,
            description,
            date_init,
            date_end,
        };

        const result = await updateClasseService.execute(data, classeId);

        return res.status(200).json(result);
    }
}
