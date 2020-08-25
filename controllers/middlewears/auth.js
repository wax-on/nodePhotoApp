// AUTH MIDDLEWARE
const { User } = require("../../models");
const basic = async (req, res, next) => {
  // Check if Auth header exists, otherwise fail.
  if (!req.headers.authorization) {
    res.status(401).send({
      status: "fail",
      data: "Authorization required",
    });
    return;
  }

  // Basic auth
  const [authSchema, base64Payload] = req.headers.authorization.split(" ");

  if (authSchema.toLowerCase() !== "basic") {
    // Not our auth
    next();
  }

  const decodedPayload = Buffer.from(base64Payload, "base64").toString("ascii");

  // email:password
  const [username, password] = decodedPayload.split(":");

  const user = await User.login(username, password);
  if (!user) {
    res.status(401).send({
      status: "fail",
      data: "Authorization failed",
    });
    return;
  }

  /**
   * We have now made the auth and knows that the user is the correct one. Attach the user object to the req, so other parts of the api can use the user.
   */
  req.user = user;
  req.user.data = { id: user.get("id") };

  next();
};

module.exports = {
  basic,
};
