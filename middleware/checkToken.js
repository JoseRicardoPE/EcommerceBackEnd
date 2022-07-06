const { expressjwt: checkJwt } = require("express-jwt");

module.exports = checkJwt({ secret: process.env.JWT_SECURE_STRING, algorithms: ["HS256"] });
