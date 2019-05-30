const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce',
    password: 'biggest1'
});

module.exports = pool.promise();