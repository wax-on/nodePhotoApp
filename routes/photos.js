const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo_controller");
const postValidationRules = require("../validation_rules/photo");

// Get photos
router.get("/", photoController.getPhotos);

// Get a specific photo
router.get("/:photoId", photoController.getSpecPhoto);

// Post photos
router.post(
  "/",
  postValidationRules.createPhotoRules,
  photoController.postPhotos
);

// Update a specific photo
router.put("/:photoId", photoController.update);

// Destroy a specific photo
router.delete("/:photoId", photoController.destroy);

module.exports = router;
