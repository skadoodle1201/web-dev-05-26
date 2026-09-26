const { verfiyJWT } = require("../helper");

const validUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const decoded = await verfiyJWT(authorization);

    req.userDetails = decoded.user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = {
  validUser,
};
