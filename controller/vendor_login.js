const db = require('../db/db');
const bcrypt = require("bcrypt")
module.exports = (req, res, next) => {
    const { email_id, password } = req.body;

    const query = 'SELECT * FROM vendor WHERE email_id = ?';
    db.query(query, [email_id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        } else {
            bcrypt.compare(password, results[0].password, (error, results) => {
                console.log(results);
                if (error) {
                    res
                        .status(500)
                        .json({ message: "Something Went Wrong" });
                } else if (results) {
                    res.status(200).json({

                        message: "Login Successfull",

                    });
                } else {
                    res.status(500).json({ message: "Incorrect Password" });
                }
            });
        }
    });

};