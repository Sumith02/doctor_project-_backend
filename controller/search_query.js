const db = require('../db/db');

module.exports = (req, res, next) => {
    const { searchQuery } = req.body; // Assuming the search query is sent in the request body

    // Construct SQL query with a WHERE clause for searching
    const sql = `
    SELECT medicine_id AS 'Medicine ID', medicine_name AS 'Medicine Name', medicine_company AS 'Company Name',
           medicine_description AS 'Medicine Description', medicine_category AS 'Category',
           DATE_FORMAT(manufacture_date, '%d-%m-%Y') AS 'Manufacture Date', 
           DATE_FORMAT(expiry_date, '%d-%m-%Y') AS 'Expire Date',
           price AS 'Selling Price(INR)', quantity AS 'Quantity'
    FROM medicine
    WHERE medicine_name LIKE ? OR medicine_company LIKE ? OR medicine_description LIKE ? OR medicine_category LIKE ?
    `;

    const searchTerm = `%${searchQuery}%`; // Add '%' before and after the search query for partial matching

    db.query(sql, [searchTerm, searchTerm, searchTerm, searchTerm], (error, results, fields) => {
        if (error) {
            console.error('Error searching data from database:', error);
            res.status(500).send({ error: 'Failed to search data' });
            return;
        }

        res.json(results);
    });
};