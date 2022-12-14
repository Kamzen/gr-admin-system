"use strict";

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

    await queryInterface.bulkInsert("Roles", [
      {
        id: "53c1a60d-9aa5-469d-bc12-d8e29e97f7ce",
        roleType: "hr-admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ee0802d7-0762-4278-bd6e-7debaee6cc75",
        roleType: "manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "029377b8-8e46-4c69-a0bc-5118e82e9cda",
        roleType: "basic",
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
