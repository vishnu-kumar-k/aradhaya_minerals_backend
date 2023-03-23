const express=require("express");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");

const router=express.Router();



router.route("/register").post(Register);
router.route("/login").post(Login)





module.exports=router;