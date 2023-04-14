'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles',
    [
        {id: 1, privilege: "Admin", updatedAt: new Date(), createdAt: new Date()},
        {id: 2, privilege: "Stylist",updatedAt: new Date(), createdAt: new Date()},
        {id: 3, privilege: "User", updatedAt: new Date(), createdAt: new Date()},
  
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
