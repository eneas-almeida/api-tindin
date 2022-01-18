import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { ResponseUserDTO } from '@modules/users/dtos/ResponseUserDTO';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';
import { injectable, inject } from 'tsyringe';

@injectable()
class RegisterUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
        @inject('HashProvider') private hashProvider: HashProvider,
        @inject('TokenProvider') private tokenProvider: TokenProvider
    ) {}

    public async execute(createUserDTO: CreateUserDTO): Promise<ResponseUserDTO> {
        /* Destructuring object */

        const { email, password } = createUserDTO;

        /* Find user by email */

        const existsUser = await this.userRepository.findOneByEmail(email);

        /* Strategy guard */

        if (existsUser) {
            throw new AppException(`User email ${email} already exists!`, 400);
        }

        /* Generate hash password by provider */

        const hashPassword = await this.hashProvider.gererateHash(password);

        /* Inject data */

        Object.assign(createUserDTO, { password: hashPassword });

        /* Create uer */

        const userCreated = await this.userRepository.create(createUserDTO);

        /* Return user created */

        return userCreated;
    }
}

export { RegisterUserService };
