const mysql = require('mysql2');
const DB_USERNAME = "root";
const DB_PASS = "password";
const DB_HOSTNAME = "localhost";
const DB_NAME = "mnedishare";
const DB_PORT=3306;

const connection = mysql.createConnection({
    host: DB_HOSTNAME,
    user: DB_USERNAME,
    password: DB_PASS,
    database: DB_NAME,
    port:DB_PORT,
});

connection.connect((err) => {
    if (err) {
        console.error('DATABASE CONNECTION ERROR:', err.message);
        process.exit(1);
    } else {
        console.log('Connected to the database successfully.');
    }
});
module.exports = connection;
