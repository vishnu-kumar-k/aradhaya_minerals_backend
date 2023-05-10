const express = require("express");
const cors = require("cors");
const router = require("./Routes");
require("dotenv").config();

const server = new express();

server.use(express.json());
server.use(cors());

server.use(router)

server.listen(process.env.port_number || 8000, () => {
  console.log(`Server Running on Port number 8000`);
});
