import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { RegisterUserService } from './RegisterUserService';

class RegisterUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const service = container.resolve(RegisterUserService);

        const data = {
            name,
            email,
            password,
        };

        const user = await service.execute(data);

        return res.status(201).json({ user });
    }
}

export { RegisterUserController };
