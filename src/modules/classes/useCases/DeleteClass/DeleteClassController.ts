import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteClassService } from './DeleteClasseService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class DeleteClassController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const classId = req.params.id;

        const deleteClassService = container.resolve(DeleteClassService);

        const result = await deleteClassService.execute(classId);

        return res.status(StatusCode.OK).json(result);
    }
}
