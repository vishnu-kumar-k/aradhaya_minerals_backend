const con = require("../Connection/Connection");

const Getproducts = async(req, res) => {
  try {
    await con.query(
      `select products_id ,products_name,products_litre,products_price,products_minimum_quantity,products_available,products_img from products`,
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
