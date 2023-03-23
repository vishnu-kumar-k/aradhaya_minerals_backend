const express = require("express");
const cors = require("cors");
const Register = require("./Auth/Register");
require("dotenv").config();
const server = new express();

server.use(express.json());
server.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
server.get("/",Register);

server.listen(process.env.port_number, () => {
  console.log(`Server Running on Port number ${process.env.port_number}`);
});
