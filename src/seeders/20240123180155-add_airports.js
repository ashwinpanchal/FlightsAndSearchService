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

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Indira Gandhi International Airport",
          city_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSM International Airport",
          city_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Navi Mumbai International Airport",
          city_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dubai International Airport",
          city_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Devi Ahilya Bai Holkar International Airport",
          city_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
