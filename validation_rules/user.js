// User rules

const { body } = require("express-validator");
const models = require("../models");

const createRules = [
  body("username")
    .isLength({ min: 3 })
    .custom(async (value) => {
      const user = await new models.User({ username: value }).fetch({
        require: false,
      });
      if (user) {
        return Promise.reject("Username already exists.");
      }

      return Promise.resolve();
    }),
  body("password").isLength({ min: 3 }),
  body("first_name").isLength({ min: 2 }),
  body("last_name").isLength({ min: 2 }),
  body("email").isLength({ min: 5 }),
];

module.exports = {
  createRules,
};
