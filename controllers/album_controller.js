// Album Controller

const { User, Album, Photo } = require("../models");
const { matchedData, validationResult } = require("express-validator");

//GET albums
const getAlbums = async (req, res) => {
  let user = null;
  try {
    user = await User.fetchById(req.user.data.id, { withRelated: ["albums"] });
  } catch (error) {
    res.sendStatus(404);
    return;
  }

  // get this user's albums
  const albums = user.related("albums");

  res.send({
    status: "success",
    data: {
      albums,
    },
  });
};

// GET /:albumId - Get a specific resource.
const getSpecAlbum = async (req, res) => {
  let album = null;
  try {
    album = await Album.fetchById(req.params.albumId, {
      withRelated: "photos",
    });
  } catch {
    res.status(404).send({
      status: "fail",
      message: "This user dosn't own this Album.🤪",
    });
    return;
  }

  const userId = album.get("user_id");
  if (userId !== req.user.data.id) {
    res.status(401).send({
      status: "fail",
      message: "Method Not Allowed.🤬",
    });
    return;
  }

  try {
    res.status(200).send({
      status: "success",
      data: {
        album,
      },
    });
    return;
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database.😞",
    });
    throw error;
  }
};

// POST /albums - Post to authenticated user's albums
const postAlbums = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send({
      status: "fail",
      data: errors.array(),
    });
    return;
  }
  const validData = matchedData(req);

  try {
    const album = await new Album(validData).save({
      user_id: req.user.attributes.id,
    });
    res.send({
      status: "success",
      data: {
        album,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database.😞",
    });
    throw error;
  }
};

// POST /albums/:albumid/photo - Post photo to album
const postPhotoInAlbum = async (req, res) => {
  try {
    album = await Album.fetchById(req.params.albumId, {
      withRelated: "photos",
    });
  } catch {
    res.status(401).send({
      status: "fail",
      message: "Method Not AlLowed.",
    });
    return;
  }
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).send({
      status: "fail",
      data: error.array(),
    });
    return;
  }
  try {
    const photo = await Photo.fetchById(req.body.photo_id);
    const album = await Album.fetchById(req.params.albumId);
    if (photo.attributes.user_id === album.attributes.user_id) {
      const photoAlbum = await album.photos().attach([photo]);
      res.status(201).send({
        status: "success",
        data: photoAlbum,
      });
    } else {
      res.status(404).send({
        status: "fail",
        data: "This user dosn't own this album. 🤬",
      });
    }
  } catch (error) {
    res.sendStatus(404);
    throw error;
  }
};

// POST /:albumId - Update a specific resource.
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

// DELETE /:albumId - Destroy a specific resource.
const destroy = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

module.exports = {
  getAlbums,
  getSpecAlbum,
  postAlbums,
  postPhotoInAlbum,
  update,
  destroy,
};
