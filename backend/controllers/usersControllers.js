const express = require('express');
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');
const bcrypt = require('bcrypt');

router.post('/createUser', async (req, res) => {
    const { name, password, type } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUserQuery = `
            INSERT INTO users (name, password, type) 
            VALUES (?, ?, ?)
        `;

        dbConnection.query(createUserQuery, [name, hashedPassword, type], (err, results) => {
            if (err) {
                console.error('Error creating user:', err);
                return res.status(500).send('Error creating user');
            }
            res.status(200).send('User created successfully');
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;