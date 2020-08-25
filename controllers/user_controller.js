// USER CONTROLLER
const bcrypt = require("bcrypt");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");

// GET / - Get all resources
const index = async (req, res) => {
  if (!req.user) {
    res.status(401).send({
      status: "fail",
      data: "Method Not Allowed!!!! 😡",
    });
    return;
  }
  res.send({
    status: "success",
    data: {
      user: {
        email: req.user.attributes.email,
        first_name: req.user.attributes.first_name,
        last_name: req.user.attributes.last_name,
        id: req.user.attributes.id,
      },
    },
  });
};

// GET /:userId - Get a specific resource
const show = async (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed. 😡😡😡",
  });
};

// POST / - Store a new resource
const store = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send({
      status: "fail",
      data: errors.array(),
    });
    return;
  }
  const validData = matchedData(req);
  // generate a hash of `validData.password`
  try {
    validData.password = await bcrypt.hash(
      validData.password,
      models.User.hashSaltRounds
    );
    // hash.salt is returned from bcrypt.hash()
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown when hashing the password.",
    });
    throw error;
  }
  try {
    const user = await new models.User(validData).save();
    res.send({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database when creating a new user.",
    });
    throw error;
  }
};

// POST /:userId - Update a specific resource
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

// DELETE /:userId - Destroy a specific resource
const destroy = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};
module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
