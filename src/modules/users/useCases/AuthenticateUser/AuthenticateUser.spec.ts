import { HashProviderInMemory } from '@modules/users/providers/HashProvider/inMemory/HashProviderInMemory';
import { HashProvider } from '@modules/users/providers/HashProvider/models/HashProvider';
import { TokenProviderInMemory } from '@modules/users/providers/TokenProvider/inMemory/TokenProviderInMemory';
import { TokenProvider } from '@modules/users/providers/TokenProvider/models/TokenProvider';
import { UserRepositoryInMemory } from '@modules/users/repositories/inMemory/UserRepositoryInMemory';
import { UserRepository } from '@modules/users/repositories/UserRepository';
import { AppException } from '@shared/exceptions/AppException';
import { AuthenticateUserService } from './AuthenticateUserService';

let userRepository: UserRepository;
let hashProvider: HashProvider;
let tokenProvider: TokenProvider;
let authenticateUserService: AuthenticateUserService;

describe('AuthenticateUserService', () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
        hashProvider = new HashProviderInMemory();
        tokenProvider = new TokenProviderInMemory();
        authenticateUserService = new AuthenticateUserService(userRepository, tokenProvider, hashProvider);
    });

    // TEST 1

    it('should be authenticate a new user', async () => {
        jest.spyOn(hashProvider, 'gererateHash');
        jest.spyOn(tokenProvider, 'generateToken');

        await userRepository.create({
            name: 'Tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        const user = await authenticateUserService.execute({
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        expect(user).toHaveProperty('token');
    });

    // TEST 2

    it('should not be authenticate', async () => {
        await expect(
            authenticateUserService.execute({
                email: 'tiagoNAOTEMemail@gmail.com',
                password: 'penadepato',
            })
        ).rejects.toBeInstanceOf(AppException);
    });

    // TEST 3

    it('should not be authenticate', async () => {
        await userRepository.create({
            name: 'Tiago',
            email: 'tiago@gmail.com',
            password: 'penadepato',
        });

        await expect(
            authenticateUserService.execute({
                email: 'tiago@gmail.com',
                password: 'passwordincorrect',
            })
        ).rejects.toBeInstanceOf(AppException);
    });
});
