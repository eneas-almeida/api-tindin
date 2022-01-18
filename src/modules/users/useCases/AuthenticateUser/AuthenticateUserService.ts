import { inject, injectable } from 'tsyringe';
import { AuthenticateUserDTO } from '@modules/users/dtos/AuthenticateUserDTO';
import { ResponseUserTokenDTO } from '@modules/users/dtos/ResponseUserTokenDTO';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';

@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
        @inject('TokenProvider') private tokenProvider: TokenProvider,
        @inject('HashProvider') private hashProvider: HashProvider
    ) {}

    async execute(authenticateUserDTO: AuthenticateUserDTO): Promise<ResponseUserTokenDTO> {
        /* Find user by email */

        const existsUser = await this.userRepository.findOneByEmail(authenticateUserDTO.email);

        /* Strategy guard */

        if (!existsUser) {
            throw new AppException('Email or password invalid!', 403);
        }

        /* Destructuring object */

        const { _id, email, password } = existsUser;

        /* Check if password is equals */

        const checkPassword = await this.hashProvider.compareHash(authenticateUserDTO.password, password);

        /* Strategy guard */

        if (!checkPassword) {
            throw new AppException('Email or password invalid!', 403);
        }

        /* Pyaload for JWT */

        const payload = {
            id: _id,
            email,
        };

        /* Generate token by provider */

        const token = await this.tokenProvider.generateToken(payload);

        /* Return token */

        return {
            token,
        };
    }
}

export { AuthenticateUserService };
