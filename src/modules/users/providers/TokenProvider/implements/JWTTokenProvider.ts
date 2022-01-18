import { token_expires, token_secret } from '@configs/token';
import { CreatePayloadDTO } from '@modules/users/dtos/CreatePayloadDTO';
import { PayloadDTO } from '@modules/users/dtos/PayloadDTO';
import { AppException } from '@shared/exceptions/AppException';
import { sign, verify } from 'jsonwebtoken';
import { TokenProvider } from '../models/TokenProvider';

class JWTTokenProvider implements TokenProvider {
    public async generateToken(data: CreatePayloadDTO): Promise<string> {
        const { user_id } = data;

        try {
            const payload: PayloadDTO = {
                user: {
                    user_token_id: user_id,
                },
            };

            const token: string = sign(payload, token_secret, { expiresIn: token_expires });

            return token;
        } catch {
            throw new Error('Token not generated!');
        }
    }

    public validateToken(token: string): PayloadDTO {
        try {
            const decoded: object | string = verify(token, token_secret);

            const { user } = decoded as PayloadDTO;

            return { user };
        } catch {
            throw new AppException('Token expired or invalid!', 403);
        }
    }
}

export { JWTTokenProvider };
