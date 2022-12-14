'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('EmployeeDepartments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      employeeId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      departmentId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EmployeeDepartments');
  }
};