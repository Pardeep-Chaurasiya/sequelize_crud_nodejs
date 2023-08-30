const productController = require("../controller/productController");

const router = require("express").Router();

router.post("/addProduct", productController.addProducts);
router.get("/allProducts", productController.getAllProducts);
router.get("/published", productController.publishProducts);
router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
