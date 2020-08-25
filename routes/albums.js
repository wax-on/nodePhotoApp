const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album_controller");
const postAlbumValidationRules = require("../validation_rules/album");

// Get albums
router.get("/", albumController.getAlbums);

// Get a specific album
router.get("/:albumId", albumController.getSpecAlbum);

// Post albums
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

// Update a specific album
router.put("/:albumId", albumController.update);

// Destroy a specific album
router.delete("/:albumId", albumController.destroy);

module.exports = router;
