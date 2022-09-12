const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
    host: process.env.HOST
});

module.exports = pool;

