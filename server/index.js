const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const fs = require("fs");

 


// INIT PORT
const PORT = process.env.PORT || 5000;
const ip_adresse = "192.168.1.15";

// RUNNIG THE SERVER
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});