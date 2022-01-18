import { app } from './App';
import { server_port } from '@configs/geral';

class Server {
    public static start(): void {
        const appExecuted = app.execute();

        appExecuted.on('connected', () => {
            console.log('Connected in databases!');

            appExecuted.listen(server_port, () => {
                console.log(`Server listen in port ${server_port}!`);
            });
        });
    }
}

Server.start();
