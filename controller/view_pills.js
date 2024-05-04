const db = require('../db/db');

// Function to format date from yyyy-mm-dd to dd-mm-yyyy
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

module.exports = (req, res, next) => {
    const category = req.params.category; // Assuming category is passed as a parameter

    const sql = 'SELECT medicine_id, medicine_name, medicine_category, medicine_company, medicine_description, medicine_category, manufacture_date, expiry_date, quantity, price FROM medicine WHERE medicine_category = "pills"';

    db.query(sql, [category], (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from database:', error);
            res.status(500).send({ error: 'Failed to fetch data' });
            return;
        }

        // Extract specific attributes from results and format dates
        const filteredResults = results.map(result => ({
            medicine_id: result.medicine_id,
            medicine_name: result.medicine_name,
            medicine_company: result.medicine_company,
            medicine_description: result.medicine_description,
            medicine_category: result.medicine_category,
            manufacture_date: formatDate(result.manufacture_date),
            expiry_date: formatDate(result.expiry_date),
            quantity: result.quantity,
            price: result.price,
        }));

        res.json(filteredResults);
    });
};