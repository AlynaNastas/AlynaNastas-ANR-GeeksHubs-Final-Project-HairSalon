'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stylist',
    [
      {id: 1, user_id: 1, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
      {id: 2, user_id: 2, updatedAt: "2023-03-04", createdAt: "2023-01-12"},


    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
