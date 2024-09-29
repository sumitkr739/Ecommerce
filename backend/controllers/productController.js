const Product = require("../models/Product");

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Fetch a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Create a new product (for admin use)
const createProduct = async (req, res) => {
  const { name, image, description, brand, category, price, countInStock } =
    req.body;

  const product = new Product({
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

module.exports = { getProducts, getProductById, createProduct };
