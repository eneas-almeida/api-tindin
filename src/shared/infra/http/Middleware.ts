import { environment } from '@configs/geral';
import { sentry_dsn } from '@configs/sentry';
import * as Sentry from '@sentry/node';
import '@shared/containers';
import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import { exception } from './Exception';
import { route } from './Route';

class Middleware {
    public use(app: Express): void {
        app.use(cors());

        if (environment !== 'development') {
            Sentry.init({ dsn: sentry_dsn, tracesSampleRate: 1.0 });

            app.use(Sentry.Handlers.requestHandler());
        }

        app.use(helmet());

        app.use(morgan('dev'));

        app.use(express.urlencoded({ extended: true }));

        app.use(express.json());

        app.use(route.execute());

        if (environment !== 'development') {
            app.use(Sentry.Handlers.errorHandler());
        }

        app.use(exception);
    }
}

const middleware = new Middleware();

export { middleware };
