import { HashProviderStrategy } from './HashProvider/HashProviderStrategy';
import { TokenProviderStrategy } from './TokenProvider/TokenProviderStrategy';

new HashProviderStrategy().setStrategy('bcrypt');
new TokenProviderStrategy().setStrategy('jwt');
