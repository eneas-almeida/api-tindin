import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateClasseService } from './CreateClasseService';

export class CreateClasseController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, date_init, date_end } = req.body;

        const createClasseService = container.resolve(CreateClasseService);

        const data = {
            name,
            description,
            date_init,
            date_end,
        };

        const result = await createClasseService.execute(data);

        return res.status(201).json(result);
    }
}
