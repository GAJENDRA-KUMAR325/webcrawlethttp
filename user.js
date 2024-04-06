const express = require('express');
const userController = require("../Controller/user.js");
const router = express.Router();
router
.post("/",userController.createProduct)
.get("/",userController.getProducts)
.get("/:id",userController.getProduct)
.put("/:id",userController.putProduct)
.patch("/:id",userController.patchProduct)
.delete("/:id",userController.deleteProduct);
exports.router = router;