// ALBUM VALIDATION RULES
const { body } = require("express-validator");
const models = require("../models");

const createAlbumRules = [
  body("title")
    .isLength({ min: 3 })
    .custom(async (value) => {
      const albums = await new models.Album({ title: value }).fetch({
        require: false,
      });
      if (albums) {
        return Promise.reject("Title already exists.");
      }
      return Promise.resolve();
    }),
  body("user_id").optional().isLength({ min: 1 }),
];

const photoToAlbum = [
  body("photo_id").custom((value) => {
    return models.Photo.fetchById(value);
  }),
];

module.exports = {
  createAlbumRules,
  photoToAlbum,
};
