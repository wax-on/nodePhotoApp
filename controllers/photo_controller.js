// PHOTO CONTROLLER
const { User, Photo } = require("../models");
const { matchedData, validationResult } = require("express-validator");

// GET /photos - Get the authenticated user's photos.
const getPhotos = async (req, res) => {
  let user = null;
  try {
    user = await User.fetchById(req.user.data.id, { withRelated: ["photos"] });
  } catch (error) {
    res.sendStatus(404);
    return;
  }

  // get this user's photo
  const photos = user.related("photos");

  res.send({
    status: "success",
    data: {
      photos,
    },
  });
};

// GET /:photoId - Get authenticated users spec photo.
const getSpecPhoto = async (req, res) => {
  let photo = null;
  try {
    photo = await Photo.fetchById(req.params.photoId);
  } catch {
    res.status(401).send({
      status: "fail",
      message: "Method Not Allowed.🤬",
    });
    return;
  }

  const userId = photo.get("user_id");
  if (userId !== req.user.data.id) {
    res.status(404).send({
      status: "fail",
      message: "This user dosn't own this Photo.🤪",
    });
    return;
  }

  try {
    res.status(200).send({
      status: "success",
      data: {
        photo,
      },
    });
    return;
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database.",
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
      message: "Exception thrown in database.",
    });
    throw error;
  }
};

// POST /photos - Post to authenticated user's photos
const postPhotos = async (req, res) => {
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
    const photo = await new Photo(validData).save({
      user_id: req.user.attributes.id,
    });
    res.send({
      status: "success",
      data: {
        photo,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database when creating a new user.😞",
    });
    throw error;
  }
};

// POST /:photoId - Update a specific resource.
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

// DELETE /:photoId - Destroy a specific resource.
const destroy = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method Not Allowed.",
  });
};

module.exports = {
  getPhotos,
  postPhotos,
  getSpecPhoto,
  update,
  destroy,
};
