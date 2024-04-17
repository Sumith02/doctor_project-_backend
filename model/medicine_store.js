const db = require('../db/db');
module.exports = (req, res, next) => {
    const medicineDetailsSchema = `
        CREATE TABLE medicine(
            medicine_id INT AUTO_INCREMENT ,
            medicine_name VARCHAR(100),
            medicine_company VARCHAR(50),
            medicine_description VARCHAR(200),
            medicine_category VARCHAR(30),
            manufacture_date DATE,
            expiry_date DATE,
            quantity INT,
            price DOUBLE,
            PRIMARY KEY(medicine_id)
        );
    `;
    db.query(medicineDetailsSchema, (error, result) => {
        if (error) {
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
}