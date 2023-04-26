const con = require("../Connection/Connection");

const EditPinCode = (req, res) => {
  const { pincode, location, status } = req.body;
  try {
    con.query(
      `update pincode set Location='${location}' ,status='${status}' where pincode=${pincode}`,
      (err, result) => {
        if (err) {
          console.log(err);
          res.json({ status: false, err });
        } else {
          res.json({ status: true, msg: "Updated Successfully" });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.json({ status: false, err });
  }
};

module.exports = EditPinCode;
