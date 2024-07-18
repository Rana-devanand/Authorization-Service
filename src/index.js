const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers/index");
const bodyParser = require("body-parser");
const app = express();

// const userRepository = require("./repository/user-repository");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
  });
};

setupAndStartServer();
