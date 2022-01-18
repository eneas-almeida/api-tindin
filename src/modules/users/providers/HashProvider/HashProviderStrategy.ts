import { container } from 'tsyringe';
import { BcryptHashProvider } from './implements/BcryptHashProvider';
import { HashProvider } from './models/HashProvider';

export class HashProviderStrategy {
    private strategies: any = {};

    constructor() {
        this.strategies['bcrypt'] = () => BcryptHashProvider;
    }

    public setStrategy(service: string): void {
        const existsStrategy = this.strategies.hasOwnProperty(service);

        if (!existsStrategy) {
            throw new Error('Service provider not found in strategies!');
        }

        container.registerSingleton<HashProvider>('HashProvider', this.strategies[service]());
    }
}
