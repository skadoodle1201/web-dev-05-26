const jwt = require("jsonwebtoken");
const SIGN_SECRET = "thisIshard";

const verfiyJWT = async (authorization) => {
  const [_, token] = authorization.split(" ");

  const decoded = await jwt.verify(token, SIGN_SECRET);

  return decoded;
};

const signJWT = async (payload, exp) => {
  const accessToken = await jwt.sign(payload, SIGN_SECRET, {
    expiresIn: exp,
  });
  return accessToken;
};

module.exports = {
  verfiyJWT,
  signJWT,
};
