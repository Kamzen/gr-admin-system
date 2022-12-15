const { Employee, Role } = require("../models");
const role = require("../models/role");
const { response } = require("../utils/Response");

const employeeController = {
  editEmployee: async (req, res, next) => {
    try {
      const { employeeId } = req.params;

      const employee = await Employee.findOne({ where: { id: employeeId } });

      if (!employee) {
        return next(
          new ApiError("Employee not found", HTTP_STATUS_CODES.NOTFOUND)
        );
      }

      const update = await Employee.update(
        { ...req.body },
        { where: { id: employee.id }, returning: true }
      );

      return res.status(200).json(
        response("Employee updated successfully", {
          employee: { ...payload, employee: update },
        })
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  getAllManagers: async (req, res, next) => {
    try {
      const managers = await Employee.findAll({
        include: {
          model: Role,
          where: {
            roleType: "manager",
          },
        },
      });
      return res.status(200).json(
        response("Employee updated successfully", {
          managers: managers,
        })
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  getAllRoles: async (req, res, next) => {
    try {
      const roles = await Role.findAll();

      return res.status(200).json(
        response("Role fetched", {
          roles: roles,
        })
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  },

  getAllEmployees: async (req, res, next) => {
    try {
      const employees = await Employee.findAll({
        include: {
          model: Role,
        },
      });

      return res.status(200).json(
        response("Role fetched", {
          employees: employees,
        })
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

module.exports = employeeController;
