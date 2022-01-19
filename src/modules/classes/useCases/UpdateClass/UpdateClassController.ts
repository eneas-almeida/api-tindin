import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateClassService } from './UpdateClassService';

export class UpdateClassController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classeId = req.params.id;

        const { name, description, video, date_init, date_end } = req.body;

        const updateClassService = container.resolve(UpdateClassService);

        const data = {
            name,
            description,
            video,
            date_init,
            date_end,
        };

        const result = await updateClassService.execute(data, classeId);

        return res.status(200).json(result);
    }
}
