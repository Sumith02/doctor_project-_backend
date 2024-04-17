const db = require('../db/db');
module.exports = (req, res, next) => {
    const { email_id, password } = req.body;

    const query = 'SELECT * FROM doctor WHERE email_id = ?';
    db.query(query, [email_id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }

        const user = results[0];
        if (user.password !== password) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        res.status(200).json({ message: 'You may login now.' });
    });

};