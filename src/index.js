const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routers/index");
const bodyParser = require("body-parser");
const app = express();

// const UserServices = require("./services/user-service");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);

    // const service = new UserServices();
    // const newToken = service.createToken({
    //   Email: "sumit123@gmail.com",
    //   id: 2,
    // });
    // console.error(newToken);
    // const verifyToken = service.verifyToken(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1bWl0MTIzQGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE3MjExMjczNTYsImV4cCI6MTcyMTIxMzc1Nn0.KCHS63RRFoimm6eRMisri3g3XF5H0XJiCMiAkgNBFFY"
    // );
    // console.log(verifyToken);
  });
};

setupAndStartServer();
