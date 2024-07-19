const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers/index");
const bodyParser = require("body-parser");
const app = express();

// const userRepository = require("./repository/user-repository");
// const db = require("./models/index");

const { user, role } = require("./models/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }

    const u1 = await user.findByPk(6);
    const r1 = await role.findByPk(1);
    // u1.addRole(r1);
    // const response = await r1.getUsers();
    // const checkRoles = await u1.hasRole(r1);
    // console.log(checkRoles);
  });
};

setupAndStartServer();
