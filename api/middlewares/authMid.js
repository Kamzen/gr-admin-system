const { HTTP_STATUS_CODES } = require("../utils/constants");
const { ApiError } = require("../utils/Response");
const jwt = require("jsonwebtoken");

exports.authorization = (req, res, next) => {
  try {
    // get header
    const header = req.header("authorization");

    // console.log(header)

    if (!header)
      return next(
        new ApiError(
          "User not authorized to access this route",
          HTTP_STATUS_CODES.UNAUTHORIZED
        )
      );

    // check if the header content start with Bearer
    if (!header.startsWith("Bearer"))
      return next(
        new ApiError(
          "User not authorized to access this api",
          HTTP_STATUS_CODES.UNAUTHORIZED
        )
      );

    const token = header.split(" ")[1];

    console.log(token);

    const user = jwt.verify(token, `${process.env.ACCESS_SECRET_TOKEN}` + "");

    if (!user) {
      return next(
        new ApiError(
          "User not authorized to access this api",
          HTTP_STATUS_CODES.UNAUTHORIZED
        )
      );
    }

    req.user = { ...user, token: token };
    next();
  } catch (err) {
    console.log(err);
    return next(
      new ApiError(
        "User not authorized to access this api",
        HTTP_STATUS_CODES.UNAUTHORIZED
      )
    );
  }
};
