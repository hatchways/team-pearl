const express = require("express");

const router = express.Router();
const protect = require("../middleware/auth");
const { createCard, updateCard } = require("../controllers/card");

router.use(protect);
router.route("/").post(createCard).patch(updateCard);

module.exports = router;
