const db = require('../db/db');

module.exports = (req, res, next) => {
    // Count the number of medicines
    const countSql = 'SELECT COUNT(*) AS totalMedicines FROM medicine';

    db.query(countSql, (error, countResults, fields) => {
        if (error) {
            console.error('Error counting medicines:', error);
            res.status(500).send({ error: 'Failed to count medicines' });
            return;
        }

        // Extract the total number of medicines from the countResults
        const totalMedicines = countResults[0].totalMedicines;

        // Send the total number of medicines as a response
        res.json({ totalMedicines });
    });
};