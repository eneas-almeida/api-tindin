interface IMongodbConfigDTO {
    mongodb_host: string;
    mongodb_port: string;
    mongodb_db_name: string;
    mongodb_user: string;
    mongodb_password: string;
}

const _mongodbHost = (): string => {
    const env = process.env.MONGODB_HOST;
    if (!env) throw new Error('Error in var ambient: MONGODB_HOST!');
    return env;
};

const _mongodbPort = (): string => {
    const env = process.env.MONGODB_PORT;
    if (!env) throw new Error('Error in var ambient: MONGODB_PORT!');
    return env;
};

const _mongodbDBName = (): string => {
    const env = process.env.MONGODB_DB_NAME;
    if (!env) throw new Error('Error in var ambient: MONGODB_DB_NAME!');
    return env;
};

const _mongodbUser = (): string => {
    const env = process.env.MONGODB_USER;
    if (!env) throw new Error('Error in var ambient: MONGODB_USER!');
    return env;
};

const _mongodbPassword = (): string => {
    const env = process.env.MONGODB_PASSWORD;
    if (!env) throw new Error('Error in var ambient: MONGODB_PASSWORD!');
    return env;
};

const config: IMongodbConfigDTO = {
    mongodb_host: _mongodbHost(),
    mongodb_port: _mongodbPort(),
    mongodb_db_name: _mongodbDBName(),
    mongodb_user: _mongodbUser(),
    mongodb_password: _mongodbPassword(),
};

const { mongodb_host, mongodb_port, mongodb_db_name, mongodb_user, mongodb_password } = config;

export { mongodb_host };
export { mongodb_port };
export { mongodb_db_name };
export { mongodb_user };
export { mongodb_password };
