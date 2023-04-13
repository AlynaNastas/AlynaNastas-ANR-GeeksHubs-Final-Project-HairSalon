'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments',
    [
    
      {id: 1, stylist_id: 1, client_id: 8, service_id: 7, date: "2023-02-13", comments:"Comes every 3 weeks to refresh the haircut.",  updatedAt: "2023-01-04", createdAt: "2023-01-12"},
      {id: 2, stylist_id: 2, client_id: 5, service_id: 2, date: "2023-01-10", comments:"Wella colour allergy. Use natural colour on this client.", updatedAt: "2023-02-05", createdAt: "2023-01-12"},
      {id: 3, stylist_id: 2, client_id: 6, service_id: 13, date: "2023-03-02", comments:"Sensitive Scalp. To be very careful with the roots.", updatedAt: "2023-03-07", createdAt: "2023-02-12"},
      {id: 4, stylist_id: 1, client_id: 4, service_id: 16, date: "2023-02-13", comments:"",  updatedAt: "2023-04-04", createdAt: "2023-03-09"},
      {id: 5, stylist_id: 2, client_id: 5, service_id: 2, date: "2023-01-10", comments:"", updatedAt: "2023-02-05", createdAt: "2023-01-08"},
      {id: 6, stylist_id: 1, client_id: 6, service_id: 6, date: "2023-03-02", comments:"", updatedAt: "2023-03-06", createdAt: "2023-01-07"},
      {id: 7, stylist_id: 1, client_id: 4, service_id: 3, date: "2023-02-13", comments:"",  updatedAt: "2023-01-04", createdAt: "2023-03-06"},
      {id: 8, stylist_id: 2, client_id: 5, service_id: 20, date: "2023-01-10", comments:"", updatedAt: "2023-03-07", createdAt: "2023-01-05"},
      {id: 9, stylist_id: 2, client_id: 5, service_id: 14, date: "2023-01-10", comments:"", updatedAt: "2023-04-08", createdAt: "2023-04-04"},
      {id: 8, stylist_id: 2, client_id: 5, service_id: 1, date: "2023-01-10", comments:"", updatedAt: "2023-03-09", createdAt: "2023-01-03"},
    
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
