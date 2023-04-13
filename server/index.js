const express = require("express")
const config = require("./config/default")
const sequelize = require("./db");
const PORT = config.port
const HOST = config.host

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server has been started at ${PORT}`))

  } catch (e) {
    console.log(e);
  }
}

start();