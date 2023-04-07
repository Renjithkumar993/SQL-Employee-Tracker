

const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: "Thanvi143$",
        database: 'employeetrackerapp_db'
    },
    console.log(`Connected to the employeetrackerapp_db database.`)
);


module.exports = db