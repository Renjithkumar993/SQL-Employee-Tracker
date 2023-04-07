
const db = require("../helpers/dbconnection")
const cTable = require('console.table');


class Department {
    constructor(newDepartmenttoadd) {
    this.newDepartmenttoadd = newDepartmenttoadd
    }

    viewAllDepartments() {
        return new Promise((resolve, reject) => {

            db.query(`SELECT * FROM department`, function (err, results) {
                if (err) {
                    console.error(err);
                    reject(err)
                } else {
                    console.table(results)
                    resolve(results)
                }
            });
        })
    }

    getdepData() {

        return new Promise((resolve, reject) => {
            db.query(`select * from department`, function (err, results) {
                if (err) {
                    reject(err)

                } else {
                    const nameRoles = results.map((result) => {
                        return  {
                            name: result.name,
                            value: result.id
                        }
                    })

                    
                    
            resolve(nameRoles)

                }
            }
            )
        });


    }

  
    addnewDept (){
        return new Promise ((resolve,reject) => {

            db.query(`INSERT INTO department (name) VALUES ("${this.newDepartmenttoadd}")`, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.log("added new Department"));
                }
            });
            
        })
    }
}


class Department1 extends Department{
    constructor(viewbydepartment){
        super()
        this.viewbydepartment = viewbydepartment
    }
    viewbydeparmtentData() {
        return new Promise((resolve, reject) => {
            db.query(` select e.first_name,e.last_name ,department.name As deparment from employee e
            JOIN roles on e.role_id = roles.id
           JOIN  department on roles.department_id = department.id WHERE department_id = ${this.viewbydepartment};`, function (err,result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.table(result));
                }
            });
        });
    }

}




class Role {
    constructor(title, salary, Department_id) {
        this.title = title;
        this.salary = salary;
        this.Department_id = Department_id;
    }
    getRole() {

        return new Promise((resolve, reject) => {

            db.query('SELECT roles.id, roles.title, roles.salary, department.name FROM roles JOIN department ON roles.department_id = department.id  ORDER BY roles.id;', function (err, results) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(console.table(results));
                }

            });

        })
    }

    getroleData() {

        return new Promise((resolve, reject) => {
            db.query(`select * from roles`, function (err, results) {
                if (err) {
                    reject(err)

                } else {
                    const nameRoles = results.map((result) => {
                        return  {
                            name: result.title,
                            value: result.id
                        }
                    })

                    
                    
            resolve(nameRoles)

                }
            }
            )
        });

    }

    addRole (){
        return new Promise ((resolve,reject) => {

            db.query(`INSERT INTO roles (title, salary,department_id) VALUES ("${this.title}", ${this.salary},${this.Department_id})`, function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.log("added new Role"));
                }
            });
            
        })
    }

}








class Employee  {
    constructor(employeeFirstName, employeeLastName, role, manager,editEmployeeRole,editEmployee) {
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.role = role;
        this.manager = manager;
        this.editEmployeeRole = editEmployeeRole;
        this.editEmployee = editEmployee;
      }
      
    addEmployees() {
        db.query(`INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES (?, ?, ?, ?)`,
            [this.employeeFirstName, this.employeeLastName, this.role, this.manager],
            function (err) {
                if (err) {
                    console.error(err);

                } 
            })
            console.log("Employee added successfully");
    }

    getManager() {
        return new Promise((resolve, reject) => {

            db.query(`SELECT * FROM employee WHERE manager_id IS NULL;
            `, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    const managers = result.map((result) => {
                        return {
                            name: `${result.first_name} ${result.last_name}`,
                            value: result.id
                        }
                    })
                    resolve(managers);
                    
                }
            });
        })
    }
   
  viewAllEmployees ()
  {
    return new Promise((resolve, reject) => {

        db.query(`SELECT e.id,e.first_name,e.last_name,title,salary,department.name,concat(e1.first_name," ", e1.last_name)  AS Managername from employee e
        JOIN roles on e.role_id = roles.id
        JOIN  department on roles.department_id = department.id
        left JOIN  employee e1 on e.manager_id = e1.id
        ORDER BY e.id;
        `, function (err, results) {
            if (err) {
                reject(err)
            } else {
               
                resolve(console.table(results));
                
            }
        });
    })
}

getallEmployees (){
    return new Promise((resolve, reject) => {

        db.query(`SELECT * FROM employee where manager_id IS NOT NULL ;
        `, function (err, result) {
            if (err) {
                reject(err)
            } else {
                const managers = result.map((result) => {
                    return {
                        name: `${result.first_name} ${result.last_name}`,
                        value: result.id
                    }
                })
                resolve(managers);
                
            }
        });
    })
}




}




class Employee1 extends Employee {
    constructor(editEmployeeRole, editEmployee) {
        super();
        this.editEmployee = editEmployee;
        this.editEmployeeRole = editEmployeeRole;
    }

    updateEmployees() {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE employee SET role_id = ${this.editEmployeeRole} where id = ${this.editEmployee};`, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.log("employee updated successfully"));
                }
            });
        });
    }
}



class Employee2 extends Employee {
    constructor(employeeUpdate,UpdateManager) {
        super();
        this.employeeUpdate = employeeUpdate;
        this.UpdateManager = UpdateManager;
    }

    updateEmployeesmanager() {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE employee SET manager_id = ${this.UpdateManager} where id = ${this.employeeUpdate};`, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.log("employee Manager updated successfully"));
                }
            });
        });
    }
}

class Employee3 extends Employee {
    constructor(viewbymanager) {
        super();
        this.viewbymanager= viewbymanager;
    }

    viewbymanagerData() {
        return new Promise((resolve, reject) => {
            db.query(`select employee.first_name,employee.last_name from employee where manager_id = ${this.viewbymanager};`, function (err,result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.table(result));
                }
            });
        });
    }
    
}



module.exports = { Department, Role, Employee,Employee1,Employee2,Employee3,Department1};

