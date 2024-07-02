const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { dbConnection } = require("../db/dbConnection");

router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const findUserQuery = `
            SELECT * FROM users WHERE name = ?
        `;

        dbConnection.query(findUserQuery, [name], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal server error');
            }

            if (results.length === 0) {
                return res.status(404).send('User not found');
            }

            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).send('Incorrect password');
            }

            res.status(200).json({ userId: user.id, userType: user.type });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;