import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PWD, SQL_DB, SQL_SERVER } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DB,
        user: SQL_USER,
        password: SQL_PWD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true,
            trustedConnection: true,
            trustServerCertificate: true,
        }
    }
};

export default config;