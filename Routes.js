const express=require("express");
const Addadmin = require("./Admin/Addadmin");
const AdminLogin = require("./Auth/AdminLogin");
const Login = require("./Auth/login");
const Register = require("./Auth/Register");
const Order = require("./Client/Order");
const CreateCan = require("./Can/CreateCan");
const EditProduct = require("./Can/UpdateCan");
const ViewOrder=require("./Admin/ViewOrder");
const Cart = require("./Admin/Cart");
const updateStatus = require("./Admin/UpdateStatus");
const CanDetails = require("./Client/CanDetails");
const OrderDetails = require("./Client/OrderDetails");
const FetchCan = require("./Can/FetchCan");
const UpdateCan = require("./Can/UpdateCan");
const SessionVerify = require("./Auth/SessionVerify");
const pincode = require("./Admin/pincode");
const AddPinCode = require("./Admin/Addpincode");
const EditPinCode = require("./Admin/EditPinCode");
const Users = require("./Admin/Users");
const router=express.Router();

//client


router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/can").post(CanDetails)
router.route("/myorders").post(OrderDetails);
router.route("/placeorder").post(Order);
router.route("/getproducts").post(FetchCan);





//admin
router.route("/admin/update").post(updateStatus)


router.route("/admin/login").post(AdminLogin);
router.route("/admin/addproducts").post(CreateCan)
router.route("/admin/addadmin").post(Addadmin)
router.route("/admin/verify").post(SessionVerify)
router.route("/admin/edit").put(UpdateCan);
router.route("/admin/addpincode").post(AddPinCode)
router.route("/admin/editpincode").post(EditPinCode)
router.route("/admin/orders").post(ViewOrder);
router.route("/admin/cart").post(Cart)
router.route("/admin/users").get(Users);




router.route("/pincode").get(pincode)
module.exports=router;