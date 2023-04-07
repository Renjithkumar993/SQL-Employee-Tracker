



-- SELECT 
--     all_employees.id,
--     employees.first_name, 
--     employees.last_name, 
--     roles.title, 
--     roles.salary, 
--     departments.name AS department_name, 
--     managers.name AS manager_name
-- FROM 
--     all_employees
--     JOIN employees ON all_employees.employee_id = employees.id
--     JOIN roles ON all_employees.role_id = roles.id
--     JOIN departments ON all_employees.department_id = departments.id
--     JOIN managers ON all_employees.manager_id = managers.id;


INSERT INTO department(name) 
VALUES
("Engineering"),
("Finance"),
("Legal"),
("Sales");


INSERT INTO  roles (title,salary,department_id) VALUES
("Office Administrator" , 35000,1),
("Marketing Manager", 60000, 2),
("Software Engineer", 80000, 3),
("Executive Assistant", 45000, 4),
("Sales Representative", 50000, 4),
("Graphic Designer", 40000, 1);

INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES
("Aswathy","karippathayil",1,NULL),
("Sara", "Lee", 6, 1),
("David", "Nguyen", 4, 1),
("Emily", "Wang", 2, NULL),
("Michael", "Kim", 5,4),
("Alex", "Garcia", 4, 4),
("Amit", "Sharma", 3, 1);





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