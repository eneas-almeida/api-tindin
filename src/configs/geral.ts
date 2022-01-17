interface IGeralConfigDTO {
    environment: string;
    server_port: string;
    api_host: string;
    api_url: string;
    email_admin: string;
}

const _environment = (): string => {
    const env = process.env.NODE_ENV;
    if (!env) throw new Error('Error in var ambient: NODE_ENV!');
    return env;
};

const _serverPortDevelopment = (): string => {
    const env = process.env.SERVER_PORT_DEVELOPMENT;
    if (!env) throw new Error('Error in var ambient: SERVER_PORT_DEVELOPMENT!');
    return env;
};

const _serverPortProduction = (): string => {
    const env = process.env.SERVER_PORT_PRODUCTION;
    if (!env) throw new Error('Error in var ambient: SERVER_PORT_PRODUCTION!');
    return env;
};

const _serverPort = (): string => {
    return _environment() === 'development' ? _serverPortDevelopment() : _serverPortProduction();
};

const _apiHost = (): string => {
    const env = process.env.API_HOST;
    if (!env) throw new Error('Error in var ambient: API_HOST!');
    return env;
};

const _apiURL = (): string => {
    return `http://${_apiHost()}:${_serverPort()}`;
};

const _emailAdmin = (): string => {
    const env = process.env.API_HOST;
    if (!env) throw new Error('Error in var ambient: API_HOST!');
    return env;
};

const config: IGeralConfigDTO = {
    environment: _environment(),
    server_port: _serverPort(),
    api_host: _apiHost(),
    api_url: _apiURL(),
    email_admin: _emailAdmin(),
};

const { environment, server_port, api_host, api_url, email_admin } = config;

export { environment };
export { server_port };
export { api_host };
export { api_url };
export { email_admin };
