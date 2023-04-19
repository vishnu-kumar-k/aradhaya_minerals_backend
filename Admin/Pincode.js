const con = require("../Connection/Connection");

const pincode = (req, res) => {
  try {
    con.query("select * from pincode", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ result });
      }
    });
  } catch (err) {
    res.send("Something went wrong");
  }
};
module.exports = pincode;
