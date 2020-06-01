const express = require("express");
const router = express.Router();
const auth = require("../controllers/middlewears/auth");

//GET - Welcome
router.get("/", (req, res) => {
  res.send({ status: "Welcome to my Photo API" });
});

router.use("/photos", [auth.basic], require("./photos"));
router.use("/albums", [auth.basic], require("./albums"));
router.use("/register", require("./users"));

module.exports = router;
