const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupAndStartApp = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
  });
};

setupAndStartApp();
