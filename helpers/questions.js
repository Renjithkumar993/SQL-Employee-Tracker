



const questions = {

  firstset: [
    {
      type: "list",
      name: "choosenOption",
      message: "What would you like to do",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Roles",
        "View All Roles",
        "Add Role",
        "View All Department",
        "Add Department",
        "Update Employee Manager",
        "View employees by Manager",
        "View Employees by Department",
        "Quit",
      ],
      pageSize: 5,
    },
  ],
  addEmployee: [
    {
      type: "input",
      name: "employeeFirstName",
      message: "What is the first name of the employee?",
      validate: (input) => {
        if (input.length === 0) {
          return "Sorry, please enter the name of the employee";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "employeeLastName",
      message: "What is the Last of the employee?",
      validate: (input) => {
        if (input.length === 0) {
          return "Sorry, please enter the name of the employee";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "role",
      message: "Please select the role",
      choices: [4]
    },
    {
      type: "list",
      name: "manager",
      message: "Please choose the manager for this employee",
      choices: []
    }
  ],

  addroll:[
    {
      type : "input",
      name : "newroll",
      message : "Enter the new Role Name"
    },
    {
      type : "input",
      name : "salary",
      message : "Please enter salary of the role"
    }
  ]
  ,
  editEmployee : [
    {
         type: "list",
         name : "editEmployee",
         message: "select the employee you would like to edit",
         choices : [],
        
   }
  ]


};


  
    
  module.exports = questions;











