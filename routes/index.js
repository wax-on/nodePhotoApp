const express = require("express");
const router = express.Router();
const auth = require("../controllers/middlewears/auth");

//GET
router.get("/", (req, res) => {
  res.send({ status: "Much welcome to my Node Photo App!" });
});

router.use("/photos", [auth.basic], require("./photos"));
router.use("/albums", [auth.basic], require("./albums"));
router.use("/register", require("./users"));

module.exports = router;
