const cTable = require('console.table');
const inquirer =  require("inquirer")
const fs = require("fs")
const main = require("./helpers/startingstyle")
const questions  = require("./helpers/questions")
const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',

      user: 'root',
 
      password: "Thanvi143$",
      database: 'employeetracker_db'
    },
    console.log(`Connected to the books_db database.`)
  );

async function promptStart (){
await main();
await inquirer.prompt(questions.addEmployee);
}


promptStart();



    let roleData = [];
 db.query('select * from role', function (err, results) {
      for (let i = 0; i < results.length; i++) {
        roleData.push(results[i].title);  
      }
      console.log(roleData);
  
    });

    module.exports = roleData;

  

  app.use((req, res) => {
    res.status(404).end();
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  



 