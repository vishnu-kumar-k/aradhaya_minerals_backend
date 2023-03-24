const express=require("express");
const Addadmin = require("./Admin/Addadmin");
const Adminlogin = require("./Auth/Adminlogin");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");
const Verifyadmin = require("./Auth/Verifyadmin");
const Addproducts = require("./Products/Addproducts");
const Getproducts = require("./Products/Getproducts");

const router=express.Router();



router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/getproducts").post(Getproducts);
router.route("/admin/login").post(Adminlogin);
router.route("/admin/addproducts").post(Addproducts)
router.route("/admin/addadmin").post(Addadmin)
router.route("/admin/verify").post(Verifyadmin)


module.exports=router;