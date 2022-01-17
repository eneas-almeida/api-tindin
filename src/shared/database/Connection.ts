import { typeormConnect } from '@shared/infra/typeorm';
import { Express } from 'express';

class Connection {
    public async use(app: Express): Promise<void> {
        await typeormConnect(app);
    }
}

const connection = new Connection();

export { connection };
