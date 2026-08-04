const pool = require("../config/db");

async function getAllEmployees() {
  try {
    const [rows] = await pool.execute("SELECT * FROM employees");
    return rows;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
}

async function getEmployeeById(id) {
  try {
    const [rows] = await pool.execute("SELECT * FROM employees WHERE id = ?", [id]);
    if (rows.length === 0) return { message: `Employee with ID ${id} not found` };
    return rows[0];
  } catch (error) {
    console.error(`Error fetching employee ID ${id}:`, error);
    throw error;
  }
}

async function addEmployee(name, email, department) {
  try {
    const [result] = await pool.execute("INSERT INTO employees (name, email, department) VALUES (?, ?, ?)", [name, email, department]);
    return { id: result.insertId, name, email, department };
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
}

async function deleteEmployee(id) {
  try {
    const [result] = await pool.execute("DELETE FROM employees WHERE id = ?", [id]);
    return result.affectedRows > 0
      ? { message: `Employee ${id} deleted successfully` }
      : { message: `Employee with ID ${id} not found` };
  } catch (error) {
    console.error(`Error deleting employee ID ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployee,
};
