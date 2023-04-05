const con = require("../Connection/Connection");

const Getproducts = async(req, res) => {
  console.log("Received")
  try {
    await con.query(
      `select canId ,canName,litre,price,MOQ,currentAvailable,canImage from canDetails`,
      (err, result) => {
        if (err) console.log(err);
        else {
          res.json({ status: true, result: result });
        }
      }
    );
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = Getproducts;
