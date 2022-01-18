import { compare, hash } from 'bcryptjs';
import { HashProvider } from '../models/HashProvider';

export class BcryptHashProvider implements HashProvider {
    public async gererateHash(payload: string): Promise<string> {
        return await hash(payload, 10);
    }

    public async compareHash(payload: string, hashed: string): Promise<boolean> {
        return await compare(payload, hashed);
    }
}
