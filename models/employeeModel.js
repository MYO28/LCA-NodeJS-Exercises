const pool = require("../config/db");

const getAllEmployees = async () => {
  const [rows] = await pool.execute("SELECT * FROM employees");
  return rows;
};

const getEmployeeById = async (id) => {
  const [rows] = await pool.execute("SELECT * FROM employees WHERE id = ?", [id]);
  return rows[0];
};

const createEmployee = async (name, email, department_id) => {
  const [result] = await pool.execute("INSERT INTO employees (name, email, department_id) VALUES (?, ?, ?)", [
    name,
    email,
    department_id,
  ]);
  return { id: result.insertId, name, email, department_id };
};

const updateEmployee = async (id, name, email, department_id) => {
  const [result] = await pool.execute("UPDATE employees SET name = ?, email = ?, department_id = ? WHERE id = ?", [
    name,
    email,
    department_id,
    id,
  ]);
  return result.affectedRows > 0;
};

const deleteEmployee = async (id) => {
  const [result] = await pool.execute("DELETE FROM employees WHERE id = ?", [id]);
  return result.affectedRows > 0;
};

const getEmployeesByLocation = async (location) => {
  const [rows] = await pool.execute(
    `SELECT e.id, e.name, e.email, d.department_name, d.location 
     FROM employees e 
     INNER JOIN departments d ON e.department_id = d.id 
     WHERE d.location = ?`,
    [location],
  );
  return rows;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesByLocation,
};
