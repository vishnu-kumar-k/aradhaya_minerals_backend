const con = require("../Connection/Connection");

const Cart = (req, res) => {
  try {
    con.query(
      `select * from cart join 
        canDetails on cart.canId=canDetails.canId 
        where cart.orderId=${req.body.orderId}`,
      (err, result) => {
        if (err) {
          res.json({ status: false, error: err });
        } else {
          res.json({ status: true, data: result });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.json({ status: false, error: err });
  }
};
module.exports = Cart;
