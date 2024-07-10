const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../.env' });
const { dbConnection } = require('../db/dbConnection');

const insertSignalQuery = `
    INSERT INTO signals (command, coin, hour, date)
    VALUES (?, ?, ?, ?)
`;

const signals = [
    { command: 'sell', coin: 'EUR/JPY', hour: '11:30:00', date: '2024-07-08' },
    { command: 'buy', coin: 'GBP/JPY', hour: '11:50:00', date: '2024-07-08' },
    { command: 'buy', coin: 'EUR/JPY', hour: '13:25:00', date: '2024-07-08' },
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