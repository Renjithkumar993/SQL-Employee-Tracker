const { Department, Role, Employee, Employee1, Employee2, Employee3, Department1, Role1 } = require("./tablesClasses");
const inquirer = require("inquirer");

const db = require("../helpers/dbconnection")



async function getstart() {

  const newDepartment = new Department();
  const newRole = new Role();
  const newEmployees = new Employee();

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
          "Delete departments, roles, and employees.",
          "View combined salaries of all employees by department.",
          "Quit",
        ],
        pageSize: 8,
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
        choices: await newRole.getroleData(),
      },
      
      {
        type: "list",
        name: "manager",
        message: "Please choose the manager for this employee",
        choices: await newEmployees.getManager(),
        loop: false
      },
    ],

    addroll: [
      {
        type: "input",
        name: "newroll",
        message: "Enter the new Role Name",
      },
      {
        type: "input",
        name: "salary",
        message: "Please enter salary of the role",
        filter(input) {
          return new Promise((resolve, reject) => {
            resolve(parseInt(input));
          });
        },
      },
      {
        type: "list",
        name: "Department_id",
        message: "Which department does this Role belongs to",
        choices: await newDepartment.getdepData(),
      },
    ],

    editEmployee: [
      {
        type: "list",
        name: "editEmployee",
        message: "select the employee you would like to edit",
        choices: await newEmployees.getallEmployees(),
      },
      {
        type: "list",
        name: "editEmployeeRole",
        message: "selct the new role for the employee",
        choices: await newRole.getroleData(),
      },
    ],

    updateemployeemanager: [
      {
        type: "list",
        name: "employeeUpdate",
        message: "Choose the employee you want to change the manager",
        choices: await newEmployees.getallEmployees(),
      },
      {
        type: "list",
        name: "UpdateManager",
        message: "please choose the new manager for the employee",
        choices: await newEmployees.getManager(),
      },
    ],

    viewemployeebymanagerquestion: [
      {
        type: "list",
        name: "viewbymanager",
        message: "Choose the manager from the list to see the employees",
        choices: await newEmployees.getManager(),
      },
    ],

    ViewEmployeesbyDepartmentquestion: [
      {
        type: "list",
        name: "viewbydeparment",
        message: " choose the department from the list",
        choices: await newDepartment.getdepData()
      }

    ],

    DeletedepartmentsrolesandemployeesQuestions: [
      {
        type: "list",
        name: "Deletedepartmentsrolesandemployees",
        message: "what would you like to delete",
        choices: ["Employee", "Departments", "Role"]
      }
    ],
    deleteDepartment: [{
      type: "list",
      name: "newDepartmenttoadd",
      message: "Choose the department you would like to delete",
      choices: await newDepartment.getdepData()
    }
    ],
    deleteRole: [{
      type: "list",
      name: "title",
      message: "Choose the role you would like to delete",
      choices: await newRole.getroleData()
    }],

    deleteEmployee: [{
      type: "list",
      name: "employeeUpdate",
      message: "Choose the employee you would like to delete",
      choices: await newEmployees.getallEmployees()
    }],
    combinedSalaryQuestion: [
      {
        type: "list",
        name: "combinedsalaryid",
        message: "Choose the department from the list",
        choices: await newDepartment.getdepData()
      }
    ]

  }

  const results = await inquirer.prompt(questions.firstset)

  switch (results.choosenOption) {
    case "View All Department":
      await newDepartment.viewAllDepartments();
      getstart();
      break;
    case "View All Roles":
      await newRole.getRole();
      getstart();
      break;
    case "Add Employee":
      const { employeeFirstName, employeeLastName, role, manager } = await inquirer.prompt(questions.addEmployee)
      const newEmployee = new Employee(employeeFirstName, employeeLastName, role, manager)
      await newEmployee.addEmployees();
      getstart();
      break;
    case "Update Employee Roles":
      const { editEmployee, editEmployeeRole } = await inquirer.prompt(questions.editEmployee)
      const updatedEmployee = new Employee1(editEmployeeRole, editEmployee)
      await updatedEmployee.updateEmployees()
      getstart();
      break;
    case "Add Role":
      const { newroll, salary, Department_id } = await inquirer.prompt(questions.addroll);
      const newRoleUpdate = new Role(newroll, salary, Department_id)
      await newRoleUpdate.addRole();
      getstart();
      break;
    case "Add Department":
      const { newDepartmenttoadd } = await inquirer.prompt([{
        type: "input",
        name: "newDepartmenttoadd",
        message: "Enter the name for the new Department"
      }])
      const newDepartmentadd = new Department(newDepartmenttoadd)
      await newDepartmentadd.addnewDept();
      getstart();
      break;
    case "View All Employees":
      await newEmployees.viewAllEmployees();
      getstart();
      break;
    case "Update Employee Manager":
      const { employeeUpdate, UpdateManager } = await inquirer.prompt(questions.updateemployeemanager)
      const UpdateManagerFuc = new Employee2(employeeUpdate, UpdateManager)
      await UpdateManagerFuc.updateEmployeesmanager();
      getstart();
      break;
    case "View employees by Manager":
      const { viewbymanager } = await inquirer.prompt(questions.viewemployeebymanagerquestion)
      const viewbymanagerfunc = new Employee3(viewbymanager)
      await viewbymanagerfunc.viewbymanagerData();
      getstart();
      break;
    case "View Employees by Department":
      const { viewbydeparment } = await inquirer.prompt(questions.ViewEmployeesbyDepartmentquestion)
      const viewbydeparmentfunc = new Department1(viewbydeparment)
      await viewbydeparmentfunc.viewbydeparmtentData()
      getstart();
      break;
    case "Delete departments, roles, and employees.":
      const results = await inquirer.prompt(questions.DeletedepartmentsrolesandemployeesQuestions)
      switch (results.Deletedepartmentsrolesandemployees) {
        case "Departments":
          const { newDepartmenttoadd } = await inquirer.prompt(questions.deleteDepartment)
          const delDepartment = new Department(newDepartmenttoadd)
          delDepartment.deleteDept();
          getstart();
          break;

        case "Role":
          const { title } = await inquirer.prompt(questions.deleteRole)
          const delRole = new Role(title)
          delRole.deleteRole()
          getstart();
          break;

        case "Employee":
          const { employeeUpdate } = await inquirer.prompt(questions.deleteEmployee)
          const delEmployee = new Employee2(employeeUpdate)
          delEmployee.deleteEmployee();
          getstart();
          break;
        default:
          console.log("Invalid option selected");
      }
      break;
    case "View combined salaries of all employees by department.":
      const { combinedsalaryid } = await inquirer.prompt(questions.combinedSalaryQuestion)
      const newRoleCombined = new Role1(combinedsalaryid)
      await newRoleCombined.combinedSalary()
      getstart()
      break;
    case "Quit":
      console.log("Goodbye!");
      process.exit(0);
      break;
    default:
      console.log("Invalid option selected");
      getstart();
  }



}

module.exports = { getstart };
