const { Router } = require("express");
const { editEmployee } = require("../controllers/employeeController");
const { HTTP_STATUS_CODES } = require("../utils/constants");
const { response, ApiError } = require("../utils/Response");

const employeeRouter = Router();

employeeRouter.put("/:emplyeeId", editEmployee);

module.exports = employeeRouter;
