const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album_controller");

// Get all
router.get("/", albumController.index);

// Get a specific
router.get("/:albumId", albumController.show);

// Store a new album
router.post("/", albumController.store);

//Update a specific album
router.put("/:albumId", albumController.update);

// Destroy/Delete a specific album
router.delete("/:albumId", albumController.destroy);

module.exports = router;
