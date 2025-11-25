const cloudinary = require("../config/cloudinary");

async function uploadToCloudinary(localPath) {
  try {
    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder: "creator_posts"
    });

    return response.secure_url; // Final URL to store in DB
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
}

module.exports = uploadToCloudinary;
