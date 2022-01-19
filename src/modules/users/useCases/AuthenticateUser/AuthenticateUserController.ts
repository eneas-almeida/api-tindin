import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { AuthenticateUserService } from './AuthenticateUserService';
import { StatusCode } from '@shared/helpers/StatusCode';

export class AuthenticateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);

        const data = {
            email,
            password,
        };

        const token = await authenticateUserService.execute(data);

        return res.status(StatusCode.OK).json(token);
    }
}
