require('dotenv').config();
const mysql = require('mysql2');

// Creating a connection with the MySQL using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Creating a connection to create tables
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL
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
        return;
    }
    console.log("dbconnection was a success");
});

module.exports = {connection, dbConnection};