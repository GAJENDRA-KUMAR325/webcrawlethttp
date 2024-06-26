const express = require('express');
const productController = require("../Controller/product.js");
const router = express.Router();
router
.post("/",productController.createProduct)
.get("/",productController.getProducts)
.get("/:id",productController.getProduct)
.put("/:id",productController.putProduct)
.patch("/:id",productController.patchProduct)
.delete("/:id",productController.deleteProduct);
exports.router = router;