const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const con = require("../Connection/Connection");

const AdminLogin = async (req, res) => {
  const { adminnumber, adminpassword } = req.body;
  
  try {
    await con.query(
      `select * from admin where admin_number=${adminnumber}`,
      async (error, result) => {
        if(error)
          console.log(error)
        else if (result.length === 0) {
          res.json({ status: false, msg: "Account not Found" });
        } else if (adminpassword=== result[0].admin_password) {
          var p = await jwt.sign(
            { id:result[0].admin_id  },
            process.env.jwt_token,
            { expiresIn: "3d" }
          );
          res.json({
            status: true,
            admin_jwt: p,
            msg: "Login Successfull",
            username: result[0].admin_name,
          });
        } else {

          res.json({ status: false, msg: "Wrong Password" });
        }
      }
    );
  } catch (err) {
    res.json({ status: false, msg: "Error", error: err });
  }
};

module.exports = AdminLogin;
