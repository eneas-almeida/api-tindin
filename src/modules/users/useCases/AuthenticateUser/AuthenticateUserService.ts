import { inject, injectable } from 'tsyringe';
import { AuthenticateUserDTO } from '@modules/users/dtos/AuthenticateUserDTO';
import { ResponseUserTokenDTO } from '@modules/users/dtos/ResponseUserTokenDTO';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';
import { StatusCode } from '@shared/helpers/StatusCode';

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
        @inject('TokenProvider') private tokenProvider: TokenProvider,
        @inject('HashProvider') private hashProvider: HashProvider
    ) {}

    async execute(authenticateUserDTO: AuthenticateUserDTO): Promise<ResponseUserTokenDTO> {
        const existsSchema = await this.userRepository.findOneByEmail(authenticateUserDTO.email);

        if (!existsSchema) {
            throw new AppException('Email or password invalid!', StatusCode.FORBIDDEN);
        }

        const { _id, email, password } = existsSchema;

        const checkPassword = await this.hashProvider.compareHash(authenticateUserDTO.password, password);

        if (!checkPassword) {
            throw new AppException('Email or password invalid!', StatusCode.FORBIDDEN);
        }

        const payload = {
            id: _id,
            email,
        };

        const token = await this.tokenProvider.generateToken(payload);

        return {
            token,
        };
    }
}
