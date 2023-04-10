

INSERT INTO department(name) 
VALUES
("Marketing"),
("Human Resources"),
("Operations"),
("Customer Service"),
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO roles (title,salary,department_id) 
VALUES
("Marketing Coordinator", 45000, 1),
("HR Manager", 70000, 2),
("Operations Analyst", 55000, 3),
("Customer Service", 40000, 4),
("Software Developer", 90000, 3),
("Sales Manager", 100000, 4),
("Financial Analyst", 75000, 2),
("Office Administrator" , 35000,1),
("Marketing Manager", 60000, 2),
("Software Engineer", 80000, 3),
("Executive Assistant", 45000, 4),
("Sales Representative", 50000, 4),
("Graphic Designer", 40000, 1);


INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES
("John", "Doe", 5, NULL),
("Emily", "Smith", 1, NULL),
("Daniel", "Garcia", 2, NULL),
("Jessica", "Lee", 4, NULL),
("Kevin", "Kim", 6, NULL),
("Maggie", "Chen", 3, 1),
("Sophie", "Brown", 7,2),
("Brian", "Wong", 5, 3),
("Karen", "Nguyen", 1, 4),
("Adam", "Taylor", 12, 5),
("Erica", "Rivera", 6, 5),
("Michelle", "Lee", 3, 5),
("Tom", "Zhang", 12, 4),
("Julia", "Park", 11, 4),
("Samuel", "Choi", 4, 3),
("Aswathy","karippathayil",1,3),
("Sara", "Lee", 9, 2),
("David", "Nguyen", 4, 2),
("Emily", "Wang", 2, 1),
("Michael", "Kim", 5,1),
("Alex", "Garcia", 12, 1),
("Amit", "Sharma", 13, 1);



-- SELECT e.id,e1.first_name,e1.last_name,title,salary ,concat(e.first_name," ", e.last_name)  AS Managername from employee e
-- JOIN roles ON e.role_id = roles.id
-- JOIN employee e1 ON e.manager_id = e1.id 
-- join department on roles.department_id = roles.id
-- GROUP BY e.id

-- join department on roles.department_id = roles.id




-- SELECT * FROM roles
-- join department on roles.department_id = department.id
-- ORDER BY roles.id



-- SELECT concat(e.first_name, " " , e.last_name) AS manager_name FROM employee e1 JOIN employee e ON e.manager_id = e1.id;



-- select id from department
-- where name = "sales";


-- SELECT id,title,salary, name FROM roles join department on roles.department_id = d.department.id ORDER BY roles.id;