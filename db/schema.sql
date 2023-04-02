DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;


CREATE TABLE allroles (id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,title VARCHAR(30) NOT NULL,department VARCHAR(30) NOT NULL ,salary INT NOT NULL);

INSERT INTO allroles (title,department,salary)
VALUES
( "software Engineer 1", "produection", 250000),
( "software Engineer 2", "produection", 250000),
( "software Engineer 3", "produection", 250000),
( "software Engineer 4", "produection", 250000),
( "software Engineer 5", "produection", 250000)

