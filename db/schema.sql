DROP DATABASE IF EXISTS employeetrackerapp_db;

CREATE DATABASE employeetrackerapp_db;

USE employeetrackerapp_db;

CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary  DECIMAL,
    department_id INT,

    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);


CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,

 FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
 FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL

);


-- CREATE TABLE all_employeesdata
-- (id INT PRIMARY KEY AUTO_INCREMENT,
-- department_data INT,
-- roles_data INT,
-- employee_data INT,

-- FOREIGN KEY (department_data) REFERENCES department(id) ,
-- FOREIGN KEY (roles_data) REFERENCES roles(id),
-- FOREIGN KEY (employee_data) REFERENCES employee(id)

-- );



