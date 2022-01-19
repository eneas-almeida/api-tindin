import { HashProviderInMemory } from '@modules/users/providers/HashProvider/inMemory/HashProviderInMemory';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProviderInMemory } from '@modules/users/providers/TokenProvider/inMemory/TokenProviderInMemory';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepositoryInMemory } from '@modules/users/repositories/inMemory/UserRepositoryInMemory';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';
import { RegisterUserService } from './RegisterUserService';

let userRepository: UserRepository;
let hashProvider: HashProvider;
let tokenProvider: TokenProvider;
let registerUserService: RegisterUserService;

describe('RegisterUserService', () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        hashProvider = new HashProviderInMemory();
        tokenProvider = new TokenProviderInMemory();
        registerUserService = new RegisterUserService(userRepository, hashProvider, tokenProvider);
    });

    // TEST 1

    it('should be register a new user', async () => {
        const generateHash = jest.spyOn(hashProvider, 'gererateHash');
        const generateToken = jest.spyOn(tokenProvider, 'generateToken');

        const user = await registerUserService.execute({
            name: 'tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        expect(generateHash).toHaveBeenCalledWith('penadepato');

        expect(user).toHaveProperty('_id');
    });

    // TEST 2

    it('should be not register a new user', async () => {
        registerUserService = new RegisterUserService(userRepository, hashProvider, tokenProvider);

        await registerUserService.execute({
            name: 'tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        await expect(
            registerUserService.execute({
                name: 'tiago',
                email: 'tiago@gmail.com',
                password: 'penadepato',
            })
        ).rejects.toBeInstanceOf(AppException);
    });
});
