require('dotenv/config');

const environment = process.env.NODE_ENV;

const patch = environment === 'development' ? '.' : '.';
const folder = environment === 'development' ? 'src' : 'dist';
const file = environment === 'development' ? 'ts' : 'js';

const { mongodb_host, mongodb_port, mongodb_db_name, mongodb_user, mongodb_password } = require('./' + folder + '/configs/mongodb');

module.exports = [
    {
        name: 'mongodb',
        type: 'mongodb',
        host: mongodb_host,
        port: mongodb_port,
        database: mongodb_db_name,
        username: mongodb_user,
        password: mongodb_password,
        synchronize: true,
        logging: false,
        useUnifiedTopology: true,
        entities: [patch + '/' + folder + '/modules/**/infra/typeorm/mongo/schemas/*.' + file],
    },
];
