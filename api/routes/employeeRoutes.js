const { Router } = require("express");
const { editEmployee, getAllManagers, getAllRoles } = require("../controllers/employeeController");
const { authorization } = require("../middlewares/authMid");
const { HTTP_STATUS_CODES } = require("../utils/constants");
const { response, ApiError } = require("../utils/Response");

const employeeRouter = Router();

employeeRouter.put("/:emplyeeId", editEmployee);
employeeRouter.get('/getAllManagers', authorization, getAllManagers)
employeeRouter.get('/roles', authorization, getAllRoles)

module.exports = employeeRouter;
