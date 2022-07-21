const express = require("express");
const { model } = require("mongoose");
const {registerUser}=require("../controllers/userController");

const router=express.Router();

router.route("/register").post(registerUser);

module.exports=router;