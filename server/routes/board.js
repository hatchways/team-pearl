const express = require("express");

const router = express.Router();
const protect = require("../middleware/auth");
const { createBoard, updateBoard } = require("../controllers/board");

router.use(protect);

router.route("/").post(createBoard).patch(updateBoard);

module.exports = router;
