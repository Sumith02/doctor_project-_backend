const db = require('../db/db');
module.exports = (req, res, next) => {
    const sql = 'SELECT * FROM medicine';

    db.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Error fetching data from database:', error);
            res.status(500).send({ error: 'Failed to fetch data' });
        }

        res.json(results);
        //console.log(results);
    });
};