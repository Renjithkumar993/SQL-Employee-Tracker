-- SELECT all_employees.id,employees.first_name,employees.last_name,roles.title,roles.salary,departments.name,managers.name
-- FROM all_employees
-- JOIN employees ON all_employees.employee_id = employees.id
-- JOIN roles ON all_employees.role_id = roles.id
-- JOIN departments ON all_employees.department_id = departments.id
-- JOIN managers ON all_employees.manager_id = managers.id;


SELECT e.id,e.first_name,e.last_name,title,salary,department.name,concat(e1.first_name," ", e1.last_name)  AS Managername from employee e
JOIN roles on e.role_id = roles.id
JOIN  department on roles.department_id = department.id
left JOIN  employee e1 on e.manager_id = e1.id
ORDER BY e.id;




 select e.first_name,e.last_name ,department.name As deparment from employee e
 JOIN roles on e.role_id = roles.id
JOIN  department on roles.department_id = department.id WHERE department_id = 4;