const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: '../../.env' });
const { dbConnection } = require('../dbConnection');

const insertSignalQuery = `
    INSERT INTO signals (command, coin, hour, date)
    VALUES (?, ?, ?, ?)
`;

const signals = [
    { command: 'buy', coin: 'BTC', hour: '12:00:00', date: '2024-07-03' },
    { command: 'sell', coin: 'ETH', hour: '15:30:00', date: '2024-07-03' },
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