const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createConnection({
  host: process.env.host,
  password: process.env.d.split("==").join(''),
  user: process.env.g+process.env.g+process.env.g,
  database: process.env.database,
});

try {
  con.connect((err, result) => {
    if (err) console.log("Some Error  " + err);
    else console.log("Connected to database");
  });
} catch (err) {
  console.log(err);
}
module.exports = con;
