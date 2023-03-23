const express=require("express");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");
const Getproducts = require("./Products/Getproducts");

const router=express.Router();



router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/getproducts").get(Getproducts);




module.exports=router;