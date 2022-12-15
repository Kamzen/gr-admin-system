const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { Employee, Role, EmployeeDepartment, Department } = require("../models");
const { HTTP_STATUS_CODES } = require("../utils/constants");
const { ApiError, response } = require("../utils/Response");
const jwt = require("jsonwebtoken");

exports.loginEmployee = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const employee = await Employee.findOne({
      where: { [Op.or]: [{ username: username }, { email: username }] },
      include: {
        model: Role,
        attributes: ["roleType"],
      },
    });

    // console.log(employee)

    if (!employee) {
      return next(
        new ApiError(
          "Username/Password are incorrect",
          HTTP_STATUS_CODES.NOTFOUND
        )
      );
    }

    const isPassCorrect = await bcrypt.compare(password, employee.password);

    if (!isPassCorrect) {
      return next(
        new ApiError(
          "Username/Password are incorrect",
          HTTP_STATUS_CODES.NOTFOUND
        )
      );
    }

    const payload = {
      id: employee.id,
      username: employee.username,
      email: employee.email,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phoneNumber: employee.phoneNumber,
      status: employee.status,
      roleType: employee.Role.roleType,
    };

    token = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN);

    return res.status(200).json(
      response("Employee logged in successfully", {
        employee: { ...payload, token: token },
      })
    );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    // an transaction is needed for all request below
    const { username } = req.body;
    const isEmailTaken = await Employee.findOne({
      where: { [Op.or]: [{ username: username }, { email: username }] },
    });

    if (isEmailTaken) {
      return next(
        new ApiError(
          "Email/Username already exist",
          HTTP_STATUS_CODES.UNAUTHORIZED
        )
      );
    }
    const department = await Department.findOne({
      where: { managerId: req.body.managerId },
    });
    const employee = await Employee.create(req.body);
    const employeeDepartment = await EmployeeDepartment.create({
      employeeId: employee.id,
      departmnetId: department.id,
    });

    return res.status(201).json(
      response("Employee created successfully", {
        employee: employee,
      })
    );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.isLoggedIn = async (req, res, next) => {
  try {
    const employee = await Employee.findOne({
      where: { id: req.user.id },
    });

    return res.status(200).json(
      response("Employee is logged in", {
        employee: { ...req.user },
      })
    );
  } catch (err) {
    next(err);
  }
};
