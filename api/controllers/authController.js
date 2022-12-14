const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { Employee, Role } = require("../models");
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
    };

    token = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN);

    return res.status(200).json(
      response("Employee logged in successfully", {
        employee: { ...payload, roleTye: employee.Role.roleType, token: token },
      })
    );
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createEmployee = (req, res, next) => {
  try {
    const employee = await.create(req.body);

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

exports.isLoggedIn = async () => {
  try {
    return res
      .status(200)
      .json(response("User logged in", { employee: { ...req.user } }));
  } catch (err) {
    next(err);
  }
};
