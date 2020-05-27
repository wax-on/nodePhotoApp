// Album Controller

const models = require("../models");

// Get all resources from Album
const index = async (req, res) => {
  const all_albums = await models.Album.fetchAll();

  res.send({
    status: "success",
    data: {
      albums: all_albums,
    },
  });
};

// Get /:albumId get a specific albumId
const show = async (req, res) => {
  const album = await new models.Album({ id: req.params.albumId }).fetch({
    withRelated: ["albums"],
  });

  res.send({
    status: "success",
    data: {
      album,
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

// POST /:albumId -  Update a specific resource
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

//  DELETE /:albumId - Destroy a specific resource
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
