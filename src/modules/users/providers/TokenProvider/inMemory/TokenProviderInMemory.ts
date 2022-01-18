import { CreatePayloadDTO } from '@modules/users/dtos/CreatePayloadDTO';
import { PayloadDTO } from '@modules/users/dtos/PayloadDTO';
import { randomBytes } from 'crypto';
import { TokenProvider } from '../models/TokenProvider';

class TokenProviderInMemory implements TokenProvider {
    public async generateToken(data: CreatePayloadDTO): Promise<string> {
        const token: string = randomBytes(8).toString('hex');

        return token;
    }

    public validateToken(_: string): PayloadDTO {
        const userId: string = randomBytes(2).toString('hex');

        return {
            user: {
                user_token_id: userId,
            },
        };
    }
}

export { TokenProviderInMemory };
