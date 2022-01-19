import { UpdateClassDTO } from '@modules/classes/dtos/UpdateClassDTO';
import { AppException } from '@shared/exceptions/AppException';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export class UpdateClassValidator {
    async validate(req: Request, _: Response, next: NextFunction) {
        const { name, description, video, date_init, date_end } = req.body;

        const updateClassDTO = UpdateClassDTO.create(name, description, video, date_init, date_end);

        const existsErrors = await validate(updateClassDTO);

        if (existsErrors.length) {
            const fields = existsErrors.map((e) => e.property).join(', ');

            throw new AppException(`Fields: ${fields}`, 400);
        }

        return next();
    }
}
