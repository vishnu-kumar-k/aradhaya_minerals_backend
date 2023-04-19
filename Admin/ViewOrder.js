const con = require("../Connection/Connection");

const ViewOrder = (req, res) => {
  const { count, fetchCount, status, date, pincode } = req.body;
  var s = status;
  var p = pincode;
  if (status === "0") {
    s = 0;
  }
  if (pincode === "0") {
    p = 0;
  }
  var t = "";
  if (date != "yyyy-mm-dd") {
    t = `and deliveryDate= '${date}'`;
  }

  try {
    if (fetchCount) {
      con.query(
        `select COUNT (*) FROM orderDetails where orderStatus ${
          s ? "=" + s : "<>" + s
        } and pinCode ${p ? "=" + p : "<>" + p} ${t}`,
        (err, result) => {
          if (err) {
            console.log(err);
            res.json({ err });
          } else {
            res.json({ res: result[0]["COUNT (*)"] });
          }
        }
      );
    } else {
      con.query(
        `SELECT * FROM orderDetails where orderStatus ${
          s ? "=" + s : "<>" + s
        } and pinCode ${
          p ? "=" + p : "<>" + p
        } ${t} ORDER BY orderId DESC LIMIT 10 offset ${count * 10}`,
        (err, result) => {
          if (err) {
            res.status(500).send("Internal server error");
          } else {
            res.json({ res: result });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);

    res.json({ err: error });
  }
};

module.exports = ViewOrder;
