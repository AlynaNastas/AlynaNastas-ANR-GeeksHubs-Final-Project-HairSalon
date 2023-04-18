'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments',
    [
    
      {id: 1, stylist_id: 1, client_id: 6, service_id: 7, date: new Date(), comments:"Comes every 3 weeks to refresh the haircut.",  createdAt: new Date(), updatedAt: new Date() },
      {id: 2, stylist_id: 2, client_id: 4, service_id: 2, date: new Date(), comments:"Wella colour allergy. Use natural colour on this client.", createdAt: new Date(), updatedAt: new Date()},
      {id: 3, stylist_id: 2, client_id: 6, service_id: 13, date: new Date(), comments:"Sensitive Scalp. To be very careful with the roots.", createdAt: new Date(), updatedAt: new Date()},
      {id: 4, stylist_id: 1, client_id: 4, service_id: 16, date: new Date(), comments:"A lot of hair",  createdAt: new Date(), updatedAt: new Date(),},
      {id: 5, stylist_id: 2, client_id: 5, service_id: 2, date: new Date(), comments:" Big change from darck to blonde in January 2020. Sensitive hair.", createdAt: new Date(), updatedAt: new Date()},
      {id: 6, stylist_id: 1, client_id: 6, service_id: 6, date: new Date(), comments:"She had a Brazilian Keratin before.", createdAt: new Date(), updatedAt: new Date()},
      {id: 7, stylist_id: 1, client_id: 5, service_id: 3, date: new Date(), comments:"Always cuts with the Manager",  createdAt: new Date(), updatedAt: new Date()},
      {id: 8, stylist_id: 2, client_id: 4, service_id: 20, date: new Date(), comments:"Discount next time", createdAt: new Date(), updatedAt: new Date()},
      {id: 9, stylist_id: 2, client_id: 4, service_id: 14, date: new Date(), comments:"Always does boost treatment", createdAt: new Date(), updatedAt: new Date()},
      {id: 10, stylist_id: 2, client_id: 5, service_id: 1, date: new Date(), comments:"Allergy test before colour", createdAt: new Date(), updatedAt: new Date()},

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
