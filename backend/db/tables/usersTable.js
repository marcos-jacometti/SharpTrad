const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const {dbConnection} = require('../dbConnection');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        password VARCHAR(100),
        type VARCHAR(100)    
    )
`;

dbConnection.query(createTableQuery, (err, results) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Table created!", results);
});

dbConnection.end();