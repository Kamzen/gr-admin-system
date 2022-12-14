// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { ApiError } = require("./utils/Response");
const { HTTP_STATUS_CODES } = require("./utils/constants");
const appRouter = require("./routes");
const errorHandlerMid = require("./middlewares/errorHandlerMid");
const { sequelize } = require('./models')

// intialize express app

const app = express();

// app middlewares
app.use(morgan("combined"));
app.use(cors());
dotenv.config({ path: `${__dirname}/config/config.env` });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const GLOBAL_URL = process.env.API_GLOBAL_URL || "/api/dev";
const API_VERSION = process.env.API_VERSION || 'v1 development'
const APP_PORT = process.env.PORT || 5000

// set global route
app.use(GLOBAL_URL, appRouter);

// check for invalid url
app.use("*", (req, res, next) => {
  next(new ApiError("Invalid route or method", HTTP_STATUS_CODES.NOTFOUND));
});

// error handler middleware
app.use(errorHandlerMid)


app.listen(APP_PORT, () => {
    sequelize.authenticate()
    console.log(`Server running in ${API_VERSION} mode on port ${APP_PORT}`)
    console.log('Database conneted')
})


