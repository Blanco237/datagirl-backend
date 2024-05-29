const jwt = require("jsonwebtoken");
const APP_CONFIGS = require("../appConfig");

const secret = APP_CONFIGS.JWT_SECRET;

const verification = (req, res, next) => {
  const headers = req.headers;
  const authHeader = headers.authorization;

  const token = authHeader?.split(" ")?.at(1);

  if (!token) {
    return res.status(400).json({ error: "No Token Provided" });
  }

  try {
    const user = jwt.verify(token, secret);

    req.user = user;

    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = verification;
