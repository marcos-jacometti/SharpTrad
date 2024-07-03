// signalsAPI.js
const express = require('express');
const router = express.Router();
const { dbConnection } = require('../dbConnection');

router.get('/signals', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const getSignalsQuery = 'SELECT * FROM signals WHERE date = ?';
    dbConnection.query(getSignalsQuery, [today], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;