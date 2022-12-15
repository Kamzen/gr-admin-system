"use strict";
const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Employees", [
      {
        id: "892f992d-0b26-41f1-adf9-bd1368767b30",
        firstName: "Human",
        lastName: "Resource",
        email: "hradmin@test.com",
        password: await bcrypt.hash("TestPass1234", await bcrypt.genSalt(10)),
        username: "HR1998",
        phoneNumber: "0797126016",
        roleId: "53c1a60d-9aa5-469d-bc12-d8e29e97f7ce",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "75cf21f3-69d8-41dc-b7f0-6b09de6b21e0",
        firstName: "IT Manager",
        lastName: "Manager",
        email: "hradmin@test.com",
        password: await bcrypt.hash("TestPass1234", await bcrypt.genSalt(10)),
        username: "Manager123",
        phoneNumber: "0797126016",
        roleId: "ee0802d7-0762-4278-bd6e-7debaee6cc75",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "16c7efc2-937e-4c23-a7ff-264b30b5448f",
        firstName: "HR Manager",
        lastName: "Manager",
        email: "hradmin@test.com",
        password: await bcrypt.hash("TestPass1234", await bcrypt.genSalt(10)),
        username: "Manager879",
        phoneNumber: "0797126016",
        roleId: "ee0802d7-0762-4278-bd6e-7debaee6cc75",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
