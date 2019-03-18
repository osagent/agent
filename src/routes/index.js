const router = require("express").Router();

const { Health } = require("../resources");

router.get("/", Health.index);

module.exports = router;
