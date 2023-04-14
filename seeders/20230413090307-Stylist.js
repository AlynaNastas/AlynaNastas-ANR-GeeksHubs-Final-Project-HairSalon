'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stylists',
    [
      {id: 1, user_id: 1, updatedAt: new Date(), createdAt: new Date()},
      {id: 2, user_id: 2, updatedAt: new Date(), createdAt: new Date()},

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
