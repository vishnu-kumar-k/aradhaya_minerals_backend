const con = require("../Connection/Connection");

const CanDetails = async (req, res) => {
  try {
    await con.query(
      `SELECT canId, canName, litre, price, MOQ, currentAvailable, canImage 
      FROM canDetails
      WHERE MOQ < currentAvailable;
      `,
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

module.exports = CanDetails;
