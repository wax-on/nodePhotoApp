const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const userValidationRules = require("../validation_rules/user");

// Get all users
router.get("/", userController.index);

// Get a specific user
router.get("/:userId", userController.show);

// Post a new user
router.post("/", userValidationRules.createRules, userController.store);

// Update a specific
router.put("/:userId", userController.update);

// Destroy a specific
router.delete("/:userId", userController.destroy);

module.exports = router;
