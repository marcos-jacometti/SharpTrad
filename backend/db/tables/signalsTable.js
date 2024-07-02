const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const {dbConnection} = require('../dbConnection');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS signals (
        id INT AUTO_INCREMENT PRIMARY KEY,
        command VARCHAR(100),
        coin VARCHAR(100),
        hour TIME,
        date DATE
    )
`;

dbConnection.query(createTableQuery, (err, results) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log("Table created!", results);
});

dbConnection.end();