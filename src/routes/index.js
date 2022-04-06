const express = require("express");
const controller = require("../controllers/index");

const router = express();

router.get("/kotiks", controller.handleGetKotiks);
router.post("/kotiks", controller.handleCreateKotiks);

module.exports = router;
