'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserRoles',
      [
        { id: 1, user_id: 1, role_id: 1, updatedAt: "2023-02-04", createdAt: "2023-01-12" },
        { id: 2, user_id: 1, role_id: 2, updatedAt: "2023-04-04", createdAt: "2023-02-21" },
        { id: 3, user_id: 3, role_id: 1, updatedAt: "2023-01-04", createdAt: "2023-03-04" },

        { id: 4, user_id: 4, role_id: 3, updatedAt: "2022-02-05", createdAt: "2022-01-10" },
        { id: 5, user_id: 5, role_id: 3, updatedAt: "2023-04-08", createdAt: "2022-01-04" },
        { id: 6, user_id: 6, role_id: 3, updatedAt: "2023-03-04", createdAt: "2022-03-04" },

        { id: 7, user_id: 7, role_id: 3, updatedAt: "2021-03-04", createdAt: "2020-06-04" },
        { id: 8, user_id: 8, role_id: 3, updatedAt: "2023-07-15", createdAt: "2022-02-09" },
        { id: 9, user_id: 2, role_id: 2, updatedAt: "2021-03-07", createdAt: "2020-06-07" },

      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
