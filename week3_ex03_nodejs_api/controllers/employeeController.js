const employeeModel = require("../models/employeeModel");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModel.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeModel.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { first_name, last_name, email, department_id } = req.body;
    const newEmployee = await employeeModel.createEmployee(first_name, last_name, email, department_id);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { first_name, last_name, email, department_id } = req.body;
    const updated = await employeeModel.updateEmployee(req.params.id, first_name, last_name, email, department_id);
    if (!updated) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deleted = await employeeModel.deleteEmployee(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeesByLocation = async (req, res) => {
  try {
    const employees = await employeeModel.getEmployeesByLocation(req.params.location);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesByLocation,
};
