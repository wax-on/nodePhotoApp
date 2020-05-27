const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo_controller");

// Get all photos
router.get("/", photoController.index);

// Get a specific photo
router.get("/:photoId", photoController.show);

// Store a new photo
router.post("/", photoController.store);

// Update a specific photo
router.put("/:photoId", photoController.update);

// Destroy a specific photo
router.delete("/:photoId", photoController.destroy);

module.exports = router;
