import { CreatePayloadDTO } from '@modules/users/dtos/CreatePayloadDTO';
import { PayloadDTO } from '@modules/users/dtos/PayloadDTO';

export interface TokenProvider {
    generateToken(data: CreatePayloadDTO): Promise<string>;

    validateToken(token: string): PayloadDTO;
}
