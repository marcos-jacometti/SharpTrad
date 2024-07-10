require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if(err){
        console.error('Connection error:', err);
        return;
    }
    console.log("Connection was a success");
});

dbConnection.connect((err) => {
    if(err){
        console.error('DB Connection error:', err);
        return;
    }
    console.log("DB connection was a success");
});

module.exports = {connection, dbConnection};