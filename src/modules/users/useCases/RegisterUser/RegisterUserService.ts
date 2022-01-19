import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import { ResponseUserDTO } from '@modules/users/dtos/ResponseUserDTO';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';
import { StatusCode } from '@shared/helpers/StatusCode';
import { injectable, inject } from 'tsyringe';

@injectable()
export class RegisterUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository,
        @inject('HashProvider') private hashProvider: HashProvider,
        @inject('TokenProvider') private tokenProvider: TokenProvider
    ) {}

    public async execute(createUserDTO: CreateUserDTO): Promise<ResponseUserDTO> {
        const { email, password } = createUserDTO;

        const existsSchema = await this.userRepository.findOneByEmail(email);

        if (existsSchema) {
            throw new AppException(`User email ${email} already exists!`, StatusCode.CONFLICT);
        }

        const hashPassword = await this.hashProvider.gererateHash(password);

        Object.assign(createUserDTO, { password: hashPassword });

        const schemaCreted = await this.userRepository.create(createUserDTO);

        return schemaCreted;
    }
}
