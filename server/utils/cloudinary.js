const cloudinary = require("cloudinary").v2;

const { upload, destroy } = cloudinary.uploader;

cloudinary.config({
  secure: true,
});

exports.uploadToCloudinary = (file) => upload(file);

exports.deleteFromCloudinary = (file) => destroy(file);
