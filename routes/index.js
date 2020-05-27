const express = require("express");
const router = express.Router();

// GET INDEX
router.get("/", (req, res) => {
  res.send({
    status:
      "Welcome to my Photo API, you can search by albums and photos EX: albums/1 or photos/3",
  });
});
router.use("/photos", require("./photos"));
router.use("/albums", require("./albums"));

module.exports = router;
