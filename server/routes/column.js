const express = require("express");

const router = express.Router();
const protect = require("../middleware/auth");
const { createColumn, updateColumn } = require("../controllers/column");

router.use(protect);
router.route("/").post(createColumn).patch(updateColumn);

module.exports = router;
