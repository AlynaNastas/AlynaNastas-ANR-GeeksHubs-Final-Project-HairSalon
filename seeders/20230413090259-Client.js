'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients',
    [
        {id: 1, user_id: 1, updatedAt: new Date(), createdAt: new Date()},
        {id: 2, user_id: 2, updatedAt: new Date(), createdAt: new Date()},
        {id: 3, user_id: 3, updatedAt: new Date(), createdAt: new Date()},
        {id: 4, user_id: 4, updatedAt: new Date(), createdAt: new Date()},
        {id: 5, user_id: 5, updatedAt: new Date(), createdAt: new Date()},
        {id: 6, user_id: 6, updatedAt: new Date(), createdAt: new Date()},
  
  
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
