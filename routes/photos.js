const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo_controller");
const postValidationRules = require("../validation_rules/photo");

// Get all photos for user
router.get("/", photoController.getPhotos);

// Get a specific photo for user
router.get("/:photoId", photoController.getSpecPhoto);

// Post photos for user
router.post(
  "/",
  postValidationRules.createPhotoRules,
  photoController.postPhotos
);

// Update a specific photo for user
router.put("/:photoId", photoController.update);

// Destroy a specific photo for user
router.delete("/:photoId", photoController.destroy);

module.exports = router;
