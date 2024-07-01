const {dbConnection} = require('./dbConnection');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user VARCHAR(100),
        password VARCHAR(100),
        origin VARCHAR(100)
    )
`;

dbConnection.query(createTableQuery, (err, result) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(result);
});

dbConnection.end();