import { CreateCommentDTO } from '@modules/comments/dtos/CreateCommentDTO';
import { AppException } from '@shared/exceptions/AppException';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export class CreateCommentValidator {
    async validate(req: Request, _: Response, next: NextFunction) {
        const { id_class, comment } = req.body;

        const createCommentDTO = CreateCommentDTO.create(id_class, comment);

        const existsErrors = await validate(createCommentDTO);

        if (existsErrors.length) {
            const fields = existsErrors.map((e) => e.property).join(', ');

            throw new AppException(`Fields: ${fields}`, 400);
        }

        return next();
    }
}
