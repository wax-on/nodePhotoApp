const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album_controller");
const postAlbumValidationRules = require("../validation_rules/album");

// Get albums all for user
router.get("/", albumController.getAlbums);

// Get a specific album for user
router.get("/:albumId", albumController.getSpecAlbum);

// Post albums for user
router.post(
  "/",
  postAlbumValidationRules.createAlbumRules,
  albumController.postAlbums
);

// Post photo in album
router.post(
  "/:albumId/photo",
  postAlbumValidationRules.photoToAlbum,
  albumController.postPhotoInAlbum
);

// Update a specific album for user
router.put("/:albumId", albumController.update);

// Destroy a specific album for user
router.delete("/:albumId", albumController.destroy);

module.exports = router;
