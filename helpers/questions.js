
const roleData = require("../server");

// module1.js


   const questions =  {
   firstset :[
    {    
        type: "list",
        name : "choosenOption",
        message : "What would you like to do",
        choices : ["View All Employees","Add Employee","Update Employee Roles","View All Roles","Add Role","View All Department","Add Department","Quit"],
        pageSize: 5
    }
  ],

  addEmployee :[
    {
        type: "input",
        name: "choosenRole",
        message : "What is the name of the role",
        validate: (input) => {
            if (input.length == 0) {
                return "Sorry, Please enter the role it can not be empty";
            }
            return true;
        }
    },

    {
        type : "list",
        name : "choosenDepartment",
        message : "Please select the department",
        choices : [roleData]
    }

  ]
}
 





module.exports = questions;