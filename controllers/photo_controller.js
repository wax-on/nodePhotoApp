// Photo Controller

const models = require("../models");

// GET / Get all resources
const index = async (req, res) => {
  const all_photos = await models.Photo.fetchAll();

  res.send({
    status: "success",
    data: {
      photos: all_photos,
    },
  });
};

// GET /:photoId - Get a specific resource - Photo
const show = async (req, res) => {
  const photo = await models.Photo.fetchById(req.params.photoId, {
    withRelated: ["users"],
  });

  res.send({
    status: "success",
    data: {
      photo,
    },
  });
};

// POST / Store a new resource
const store = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

// POST /:photoId - Update a specific resource
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

// DELETE /:photoId - Destroy a specific resource
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
