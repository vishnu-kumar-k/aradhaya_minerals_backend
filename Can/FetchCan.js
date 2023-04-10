const con = require("../Connection/Connection");

const FetchCan = async(req, res) => {
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

module.exports = FetchCan;
