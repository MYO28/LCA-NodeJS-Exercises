const pool = require("../config/db");

const getAllProducts = async () => {
  const [rows] = await pool.execute("SELECT * FROM products");
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.execute("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

const createProduct = async (product_name, price, category) => {
  const [result] = await pool.execute("INSERT INTO products (product_name, price, category) VALUES (?, ?, ?)", [
    product_name,
    price,
    category,
  ]);
  return { id: result.insertId, product_name, price, category };
};

const updateProduct = async (id, product_name, price, category) => {
  const [result] = await pool.execute("UPDATE products SET product_name = ?, price = ?, category = ? WHERE id = ?", [
    product_name,
    price,
    category,
    id,
  ]);
  return result.affectedRows > 0;
};

const deleteProduct = async (id) => {
  const [result] = await pool.execute("DELETE FROM products WHERE id = ?", [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
