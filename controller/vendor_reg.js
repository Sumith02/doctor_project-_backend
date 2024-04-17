const db = require('../db/db');
const bcrypt = require("bcrypt");
module.exports = async(req, res, next) => {
    const { fname, lname, email, phone, password } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const userQuery = `INSERT INTO vendor(first_name,last_name,email_id,phone,password) VALUES(?,?,?,?,?) `;
    db.query(userQuery, [fname, lname, email, phone, hashPass], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });
};