import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateClassService } from './UpdateClasseService';

export class UpdateClassController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classeId = req.params.id;

        const { name, description, date_init, date_end } = req.body;

        const updateClassService = container.resolve(UpdateClassService);

        const data = {
            name,
            description,
            date_init,
            date_end,
        };

        const result = await updateClassService.execute(data, classeId);

        return res.status(200).json(result);
    }
}
