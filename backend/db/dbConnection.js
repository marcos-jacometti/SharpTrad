require('dotenv').config();
const mysql = require('mysql2');

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}` 

const connection = mysql.createConnection(urlDB);

const dbConnection = mysql.createConnection(urlDB);

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