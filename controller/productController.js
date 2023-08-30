const db = require("../models");
const Products = db.products;

const addProducts = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Please insert Title" });
    return;
  }

  const productInfo = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  //   create product
  try {
    const product = await Products.create(productInfo);
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  const products = await Products.findAll({});
  res.status(200).send(products);
};

// get single product details
const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update product details
const updateProduct = async (req, res) => {
  id = req.params.id;
  const product = await Products.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// delete product
const deleteProduct = async (req, res) => {
  id = req.params.id;
  await Products.destroy({ where: { id: id } });
  res.status(200).send("product deleted successfully");
};

// publish product condition
const publishProducts = async (req, res) => {
  const products = await Products.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProducts,
  getAllProducts,
  getSingleProduct,
  publishProducts,
  deleteProduct,
  updateProduct,
};
