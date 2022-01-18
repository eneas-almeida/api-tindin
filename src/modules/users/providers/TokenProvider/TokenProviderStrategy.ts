import { container } from 'tsyringe';

import { TokenProvider } from './models/TokenProvider';
import { JWTTokenProvider } from './implements/JWTTokenProvider';

class TokenProviderStrategy {
    private strategies: any = {};

    constructor() {
        this.strategies['jwt'] = () => JWTTokenProvider;
    }

    public setStrategy(service: string): void {
        const existsStrategy = this.strategies.hasOwnProperty(service);

        if (!existsStrategy) {
            throw new Error('Service provider not found in strategies!');
        }

        container.registerSingleton<TokenProvider>('TokenProvider', this.strategies[service]());
    }
}

export { TokenProviderStrategy };
