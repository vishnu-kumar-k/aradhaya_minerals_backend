const jwt = require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config();
const OrderDetails = (req, res) => {
  const { jwt_token } = req.body;
  try {
    var decode = jwt.verify(jwt_token, process.env.jwt_token);
    con.query(
      `SELECT * FROM orderDetails where orderId=${decode.id} ORDER BY orderId DESC `,
      (err, result) => {
        if (err) {
          console.log(err);
          res.json({ err });
        } else {
          res.json({ res: result });
        }
      }
    );
  } catch (err) {
    res.json({ err: err });
  }
};

module.exports = OrderDetails;
