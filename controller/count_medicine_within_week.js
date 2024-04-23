const db = require('../db/db');

// Function to get the count of medicines added within the current week
function getCountOfMedicinesAddedThisWeek(callback) {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));

    const sql = `
        SELECT COUNT(*) AS totalCount
        FROM medicine
        WHERE manufacture_date >= ? AND manufacture_date <= ?
    `;
    db.query(sql, [startOfWeek, endOfWeek], (error, results) => {
        if (error) {
            console.error('Error counting medicines added this week:', error);
            callback(error, null);
            return;
        }
        const totalCount = results[0].totalCount;
        callback(null, totalCount);
    });
}

// Endpoint to get the count of medicines added this week
module.exports = (req, res, next) => {
    getCountOfMedicinesAddedThisWeek((error, totalCount) => {
        if (error) {
            res.status(500).json({ error: 'Failed to fetch medicine count' });
            return;
        }
        res.json({ countThisWeek: totalCount });
    });
};