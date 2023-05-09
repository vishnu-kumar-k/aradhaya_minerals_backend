const con = require("../Connection/Connection");

const RemoveAdmin = (req, res) => {
  const { id } = req.body;
  try {
    con.query(`delete from admin where admin_id=${id}`, (err, result) => {
      if (err) {
        console.log(err);
        res.json({ status: false });
      } else {
        res.json({ status: true });
      }
    });
  } catch (err) {
    console.log(err);
    res.json({ status: false });
  }
};
module.exports=RemoveAdmin;
