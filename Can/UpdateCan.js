const con = require("../Connection/Connection");

const UpdateCan = (req, res) => {
  const { id, litre, min, price, available } = req.body.form;
  try {
    var result = con.query(
      `update canDetails set litre=${litre} ,price=${price} ,MOQ=${min},currentAvailable=${available} where canId=${id}`
    );
    if (result) {
      res.json({ status: true, msg: "Updated Successfully" });
    } else {
      res.json({ status: false });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};
module.exports = UpdateCan;
