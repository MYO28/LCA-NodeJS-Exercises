const pool = require("../config/db");

async function getAllProducts() {
  try {
    const [rows] = await pool.execute("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

async function getProductById(id) {
  try {
    const [rows] = await pool.execute("SELECT * FROM products WHERE id = ?", [id]);
    if (rows.length === 0) return { message: `Product with ID ${id} not found` };
    return rows[0];
  } catch (error) {
    console.error(`Error fetching product ID ${id}:`, error);
    throw error;
  }
}

async function addProduct(name, price, category) {
  try {
    const [result] = await pool.execute("INSERT INTO products (name, price, category) VALUES (?, ?, ?)", [name, price, category]);
    return { id: result.insertId, name, price, category };
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

async function updateProduct(id, name, price, category) {
  try {
    const [result] = await pool.execute("UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?", [
      name,
      price,
      category,
      id,
    ]);
    return result.affectedRows > 0 ? { id, name, price, category, updated: true } : { message: `Product with ID ${id} not found` };
  } catch (error) {
    console.error(`Error updating product ID ${id}:`, error);
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    const [result] = await pool.execute("DELETE FROM products WHERE id = ?", [id]);
    return result.affectedRows > 0
      ? { message: `Product ${id} deleted successfully` }
      : { message: `Product with ID ${id} not found` };
  } catch (error) {
    console.error(`Error deleting product ID ${id}:`, error);
    throw error;
  }
}

async function getProductsByCategory(category) {
  try {
    const [rows] = await pool.execute("SELECT * FROM products WHERE category = ?", [category]);
    return rows;
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    throw error;
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
