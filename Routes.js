const express=require("express");
const Adminlogin = require("./Auth/Adminlogin");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");
const Getproducts = require("./Products/Getproducts");

const router=express.Router();



router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/getproducts").get(Getproducts);
router.route("/admin/login").post(Adminlogin);



module.exports=router;