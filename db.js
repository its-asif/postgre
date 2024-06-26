const Pool = require("pg").Pool;
require('dotenv').config();

// console.log( process.env.DB_port );

const pool = new Pool({
    user : process.env.DB_user,
    host : process.env.DB_host,
    database : process.env.DB_database,
    password : process.env.DB_password,
    port : process.env.DB_port,
})

module.exports = pool;