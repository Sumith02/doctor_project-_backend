const db = require("../db/db");

module.exports = (req, res, next) => {
    const { email, password } = req.body;

    // Perform authentication here (e.g., verify username and password against database)
    // If authentication is successful, fetch user profile data from the database
    const sql = 'SELECT * FROM doctor WHERE email_id = ? AND password = ?';
    db.query(sql, [email, password], (error, results) => {
        if (error) {
            console.error('Error fetching user profile:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }

        // If authentication is successful, send user profile data to the frontend
        const userProfile = {
            doctor_name: results[0].doctor_name,
            email: results[0].email,
            phone: results[0].phone
        };
        res.json(userProfile);
    });


}