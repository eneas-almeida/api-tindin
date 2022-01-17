interface ISentryConfigDTO {
    sentry_dsn: string;
}

const _sentryDSN = (): string => {
    const env = process.env.SENTRY_DSN;
    if (!env) throw new Error('Error in var ambient: SENTRY_DSN!');
    return env;
};

const config: ISentryConfigDTO = {
    sentry_dsn: _sentryDSN(),
};

const { sentry_dsn } = config;

export { sentry_dsn };
