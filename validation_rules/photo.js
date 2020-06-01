// Photo rules

const { body } = require("express-validator");
const models = require("../models");

const createPhotoRules = [
  body("title")
    .isLength({ min: 3 })
    .custom(async (value) => {
      const photos = await new models.Photo({ title: value }).fetch({
        require: false,
      });
      if (photos) {
        return Promise.reject("Title already exists.");
      }
      return Promise.resolve();
    }),
  body("url").isLength({ min: 5 }),
  body("album_id").optional().isLength({ min: 1 }),
  body("user_id").optional().isLength({ min: 1 }),
  body("comment").optional().trim(),
];

module.exports = {
  createPhotoRules,
};
