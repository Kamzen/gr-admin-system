const { Employee } = require("../models");

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
};

module.exports = employeeController;
