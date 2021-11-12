const express = require("express");

const router = express.Router();
const protect = require("../middleware/auth");
const upload = require("../utils/multer");

const {
  searchUsers,
  uploadImage,
  deleteImage,
  updateUser,
} = require("../controllers/user");

router.use(protect);

router.route("/").get(searchUsers);
router.route("/update").patch(updateUser);
router.route("/upload-image").post(upload.single("image"), uploadImage);
router.route("/delete-image").delete(deleteImage);

module.exports = router;
