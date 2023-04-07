const express=require("express");
const Addadmin = require("./Admin/Addadmin");
const Adminlogin = require("./Auth/Adminlogin");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");
const Verifyadmin = require("./Auth/Verifyadmin");
const Order = require("./Client/Order");
const Addproducts = require("./Products/Addproducts");
const EditProduct = require("./Products/EditProduct");
const Getproducts = require("./Products/Getproducts");
const ViewOrder=require("./Admin/ViewOrder");
const Cart = require("./Admin/Cart");
const updateStatus = require("./Admin/UpdateStatus");
const router=express.Router();


router.route("/admin/update").post(updateStatus)
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/getproducts").post(Getproducts);
router.route("/admin/login").post(Adminlogin);
router.route("/admin/addproducts").post(Addproducts)
router.route("/admin/addadmin").post(Addadmin)
router.route("/admin/verify").post(Verifyadmin)
router.route("/admin/edit").put(EditProduct);
router.route("/addorder").post(Order);
router.route("/admin/orders").post(ViewOrder);
router.route("/admin/cart").post(Cart)
module.exports=router;