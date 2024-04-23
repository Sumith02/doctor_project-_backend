const db = require("../db/db");
module.exports = (req, res, next) => {
    const doctorSchemaQuery = `
        CREATE TABLE doctor(
            doctorid INT  PRIMARY KEY,
            doctor_name VARCHAR(20),
            email_id VARCHAR(20),
            user_name VARCHAR(20),
            phone BIGINT,
            password VARCHAR(20)
        );
    `;
    db.query(doctorSchemaQuery, (error, result) => {
        if (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
        res.status(200).json({ status: true, message: "Query Execuited Successfully" });
    });
};