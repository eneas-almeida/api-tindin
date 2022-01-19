import { CreateClassDTO } from '@modules/classes/dtos/CreateClassDTO';
import { AppException } from '@shared/exceptions/AppException';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export class CreateClassValidator {
    async validate(req: Request, _: Response, next: NextFunction) {
        const { name, description, video, date_init, date_end } = req.body;

        const createClassDTO = CreateClassDTO.create(name, description, video, date_init, date_end);

        const existsErrors = await validate(createClassDTO);

        if (existsErrors.length) {
            const fields = existsErrors.map((e) => e.property).join(', ');

            throw new AppException(`Fields: ${fields}`, 400);
        }

        return next();
    }
}
