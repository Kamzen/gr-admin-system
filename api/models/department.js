"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Employee, EmployeeDepartment }) {
      // define association here
      this.belongsTo(Employee, {
        foreignKey: "managerId",
      });

      this.hasMany(EmployeeDepartment, {
        foreignKey: "departmentId",
      });
    }
  }
  Department.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      managerId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
