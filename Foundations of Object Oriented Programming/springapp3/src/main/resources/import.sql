
-- INSERT EMPLOYEE
INSERT INTO employee (employee_id, first_name, last_name, email) VALUES (100, 'John', 'Doe', 'john@gmail.com');
INSERT INTO employee (employee_id, first_name, last_name, email) VALUES (101, 'Mike', 'Doe', 'mike@gmail.com');
INSERT INTO employee (employee_id, first_name, last_name, email) VALUES (102, 'Stacy', 'Doe', 'stacy@gmail.com');
INSERT INTO employee (employee_id, first_name, last_name, email) VALUES (103, 'Danniel', 'Spark', 'daniel@gmail.com');
INSERT INTO employee (employee_id, first_name, last_name, email) VALUES (104, 'Chandler', 'Bing', 'chandler@gmail.com');

-- INSERT PROJECT
INSERT INTO project (project_id, name, stage, description) VALUES (1, 'Project 1', 'Completed', 'Project 1 desc');
INSERT INTO project (project_id, name, stage, description) VALUES (2, 'Project 2', 'Completed', 'Project 2 desc');
INSERT INTO project (project_id, name, stage, description) VALUES (3, 'Project 3', 'Completed', 'Project 3 desc');
INSERT INTO project (project_id, name, stage, description) VALUES (4, 'Project 4', 'In-progress', 'Project 4 desc');
INSERT INTO project (project_id, name, stage, description) VALUES (5, 'Project 5', 'Cancelled', 'Project 4 desc');


-- INSERT PROJECT AND EMPLOYEE

INSERT INTO project_employee (project_id, employee_id) VALUES (1, 100);
INSERT INTO project_employee (project_id, employee_id) VALUES (2, 100);
INSERT INTO project_employee (project_id, employee_id) VALUES (2, 101);
INSERT INTO project_employee (project_id, employee_id) VALUES (3, 102);
INSERT INTO project_employee (project_id, employee_id) VALUES (3, 100);





