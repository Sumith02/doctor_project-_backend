const db = require('../db/db');
module.exports = (req, res, next) => {
    const { medicine_name, medicine_company, medicine_description, medicine_category, manufacture_date, expiry_date, quantity, price } = req.body;
    const issueQuery = `
        INSERT INTO medicine(medicine_name,medicine_company,medicine_description ,medicine_category ,manufacture_date ,expiry_date,quantity ,price) VALUES(?,?,?,?,?,?,?,?)
    `;
    db.query(issueQuery, [medicine_name, medicine_company, medicine_description, medicine_category, manufacture_date, expiry_date, quantity, price], (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
            console.log(error);
        }
        res.status(200).json({ status: true, message: "user Created Successfully" });
    });

};