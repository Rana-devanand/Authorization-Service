const express = require("express");
const { PORT } = require("./config/serverConfig");
const app = express();

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

setupAndStartServer();
