import { Express } from 'express';
import { Connection, getConnectionOptions, createConnection, createConnections } from 'typeorm';

const typeormConnect = async (app: Express): Promise<void> => {
    await createConnections()
        .then(() => {
            app.emit('connected');
        })
        .catch((e) => {
            console.log(e);
            console.log('Database connection error!');
        });
};

const connectService = async (serviceName: string = 'default'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions(serviceName);

    return createConnection(Object.assign(defaultOptions));
};

export { connectService, typeormConnect };
