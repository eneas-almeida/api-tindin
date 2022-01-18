import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteClasseService } from './DeleteClasseService';

export class DeleteClasseController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classId = req.params.id;

        const deleteClasseService = container.resolve(DeleteClasseService);

        const result = await deleteClasseService.execute(classId);

        return res.status(200).json(result);
    }
}
