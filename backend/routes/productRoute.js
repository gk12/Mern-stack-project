const express=require("express");
const { getAllProducts,createProduct, updateProduct, delteProduct, getProductDetails } = require("../controllers/productControllers");
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(delteProduct).get(getProductDetails);

module.exports=router