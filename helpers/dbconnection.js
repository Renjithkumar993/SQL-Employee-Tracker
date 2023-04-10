require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log(`Connected to the ${process.env.DB_NAME} database.`);
  }
});

module.exports = db;



module.exports = db