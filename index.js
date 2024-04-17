const app = require('./app');
const db = require('./db/db');
require("dotenv").config();

app.listen(5000, function() {
    console.log("Server Is Running At Port 5000");
});