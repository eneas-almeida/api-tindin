interface Auth {
    id: string;
    email: string;
}

declare namespace Express {
    export interface Request {
        auth: Auth;
    }
}
