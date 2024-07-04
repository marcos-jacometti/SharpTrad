const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../.env' });
const { dbConnection } = require('../db/dbConnection');

const insertSignalQuery = `
    INSERT INTO signals (command, coin, hour, date)
    VALUES (?, ?, ?, ?)
`;

const signals = [
    { command: 'sell', coin: 'EUR/JPY', hour: '16:45:00', date: '2024-07-04' },
    { command: 'sell', coin: 'EUR/JPY', hour: '18:10:00', date: '2024-07-04' },
];

signals.forEach(signal => {
    dbConnection.query(insertSignalQuery, [signal.command, signal.coin, signal.hour, signal.date], (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Signal inserted!", results);
    });
});

dbConnection.end();