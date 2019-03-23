const router = require("express").Router();

const { Health } = require("../resources");

router.get("/", (req, res) => {
  res.json({
    name: "OS Agent",
    version: "0.0.1"
  });
});

router.get("/health", Health.index);

module.exports = router;
