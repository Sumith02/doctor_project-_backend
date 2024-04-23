const db = require('../db/db');

// Function to get the total expenditure
function getTotalExpenditure(callback) {
    const sql = `SELECT SUM(price) AS totalExpenditure FROM medicine`;

    db.query(sql, (error, results) => {
        if (error) {
            console.error('Error calculating total expenditure:', error);
            callback(error, null);
            return;
        }

        // If there are no medicines in the database, return 0 as total expenditure
        const totalExpenditure = results.length > 0 ? results[0].totalExpenditure : 0;
        callback(null, totalExpenditure);
    });
}

// Endpoint to get the total expenditure
module.exports = (req, res, next) => {
    getTotalExpenditure((error, totalExpenditure) => {
        if (error) {
            res.status(500).json({ error: 'Failed to calculate total expenditure' });
            return;
        }
        res.json({ totalExpenditure });
    });
};