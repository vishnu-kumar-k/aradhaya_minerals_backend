const con = require("../Connection/Connection");

const AddPinCode = (req, res) => {
  const { pincode, location, status } = req.body;
  const values=[
    [pincode,location,status]
  ]
  try {
    con.query(
      `insert into pincode(pincode,Location,status) values ?`,
      [values],
      (err, result) => {
        if (err) {
          console.log(err);
          res.json({ status: false, msg: err });
        } else {
          res.json({ status: true, msg: "Added successfully" });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.json({ status: false, msg: err });
  }
};
module.exports=AddPinCode
