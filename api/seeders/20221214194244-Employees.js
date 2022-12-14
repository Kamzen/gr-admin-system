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
