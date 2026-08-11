USE techvibe_db;

CREATE TABLE IF NOT EXISTS departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

ALTER TABLE employees ADD COLUMN department_id INT;
ALTER TABLE employees ADD CONSTRAINT fk_employee_department 
FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL;

INSERT INTO departments (department_name, location) VALUES
('Engineering', 'Cape Town'),
('Marketing', 'Johannesburg');

UPDATE employees SET department_id = 1 WHERE id = 1;
UPDATE employees SET department_id = 2 WHERE id = 2;