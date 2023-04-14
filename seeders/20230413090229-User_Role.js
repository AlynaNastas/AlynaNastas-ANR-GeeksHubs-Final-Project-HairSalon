'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserRoles',
    [
        {id: 1, user_id: 1, role_id: 1, updatedAt: new Date(), createdAt: new Date()},
        {id: 2, user_id: 1, role_id: 2, updatedAt: new Date(), createdAt: new Date()},
        {id: 3, user_id: 3, role_id: 1, updatedAt: new Date(), createdAt: new Date()},
        
        {id: 4, user_id: 4, role_id: 3, updatedAt: new Date(), createdAt: new Date()},
        {id: 5, user_id: 5, role_id: 3, updatedAt: new Date(), createdAt: new Date()},
        {id: 6, user_id: 6, role_id: 3, updatedAt: new Date(), createdAt: new Date()},
        
        {id: 7, user_id: 7, role_id: 3, updatedAt: new Date(), createdAt: new Date()},
        {id: 8, user_id: 8, role_id: 3, updatedAt: new Date(), createdAt: new Date()},
        {id: 9, user_id: 2, role_id: 2, updatedAt: new Date(), createdAt: new Date()},

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
