const express = require("express");
const routes = require("./routes");

class Agent {
  constructor() {
    this.express = express();
    this.routes();
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new Agent().express;
