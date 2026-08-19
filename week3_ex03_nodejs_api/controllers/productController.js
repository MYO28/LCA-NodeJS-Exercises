const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { product_name, price, category } = req.body;
    const newProduct = await productModel.createProduct(product_name, price, category);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { product_name, price, category } = req.body;
    const updated = await productModel.updateProduct(req.params.id, product_name, price, category);
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await productModel.deleteProduct(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
