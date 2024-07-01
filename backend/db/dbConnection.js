require('dotenv').config();
const mysql = require('mysql2');

console.log('Environment variables:');
console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_NAME: ${process.env.DB_NAME}`);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Connection was a success");
});

dbConnection.connect((err) => {
    if(err){
        console.error(err);
        return
    }
    console.log("dbConnection was a success");
});

module.exports = { connection, dbConnection };