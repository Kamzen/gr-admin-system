"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeDepartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Employee, Department}) {
      // define association here

      this.belongsTo(Employee, {
        foreignKey: 'employeeId'
      })

      this.belongsTo(Department, {
        foreignKey: 'departmentId'
      })
    }
  }
  EmployeeDepartment.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      employeeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      departmentId: {
        type: DataTypes.UUID,
        allowNull: false,
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
      modelName: "EmployeeDepartment",
    }
  );
  return EmployeeDepartment;
};
