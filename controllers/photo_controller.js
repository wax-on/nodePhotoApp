// Photo Controller

const { User, Photo } = require("../models");
const { matchedData, validationResult } = require("express-validator");

// GET /photos - Get the authenticated user's photos.
const getPhotos = async (req, res) => {
  if (!req.user) {
    res.status(401).send({
      status: "fail",
      data: "Authentication Required.",
    });
    return;
  }

  // Query db for photos this user has.
  const userId = req.user.get("id");
  const user = await new User({ id: userId }).fetch({ withRelated: "photos" });
  const photos = user.related("photos");

  res.send({
    status: "success",
    data: {
      photos,
    },
  });
};

// GET /:photoId - Get authenticated users specific photo.
const getSpecPhoto = async (req, res) => {
  const photo = await new Photo({ id: req.params.photoId }).fetch();

  if (req.user.id === photo.attributes.user_id) {
    res.send({
      status: "success",
      photo: {
        title: photo.get("title"),
        url: photo.get("url"),
        comment: photo.get("comment"),
      },
    });
  } else {
    res.status(404).send({
      status: "Fail",
      data: "This user doesn't own this photo.",
    });
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
    const photo = await new Photo(validData).save();
    const userId = req.user.get("id");
    const user = await new User({ id: userId }).fetch({
      withRelated: "photos",
    });
    const result = await user.photos().attach(photo);
    console.log("Created new photo successfully:", photo);
    res.send({
      status: "success",
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database when creating a new photo.",
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
