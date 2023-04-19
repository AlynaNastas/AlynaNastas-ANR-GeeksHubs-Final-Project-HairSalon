'use strict';
const bcrypt = require('bcrypt');

const password = "123456"
const encryptedPassword = bcrypt.hashSync(password, 12);



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        { id: 1, name: "Alyna", surname: "Nastas Romaniuc", email: "alyna@alyna.com", password: encryptedPassword, birth_date: "1992-04-30", phone: "6766570388", updatedAt: "2023-02-04", createdAt: "2023-02-04" },
        { id: 2, name: "Giota", surname: "Chiamakioti", email: "giota@giota.com", password: encryptedPassword, birth_date: "1991-05-20", phone: "3332221110", updatedAt: "2023-03-07", createdAt: "2023-02-08" },
        { id: 3, name: "Freddie", surname: "Swift", email: "freddie@freddie.com", password: encryptedPassword, birth_date: "1960-06-30", phone: "6533738803", updatedAt: "2023-04-06", createdAt: "2023-02-07" },
        { id: 4, name: "Julia", surname: "Mconagan", email: "julia@julia.com", password: encryptedPassword, birth_date: "1993-10-10", phone: "67661128003", updatedAt: "2023-07-05", createdAt: "2023-01-09" },
        { id: 5, name: "Wylde", surname: "Cristiana", email: "wylde@wylde.com", password: encryptedPassword, birth_date: "1986-04-10", phone: "5565738893", updatedAt: "2023-08-04", createdAt: "2023-01-08" },
        { id: 6, name: "Maddie", surname: "Mae", email: "maddie@malouis.com", password: encryptedPassword, birth_date: "1990-09-03", phone: "4231173843", updatedAt: "2023-09-03", createdAt: "2023-01-06" },
        { id: 7, name: "Louis", surname: "Maharaj", email: "louis@.com", password: encryptedPassword, birth_date: "1986-08-10", phone: "5544443883", updatedAt: "2023-05-02", createdAt: "2023-01-05" },
        { id: 8, name: "Soraja", surname: "Hadzic", email: "soraja@soraja.com", password: encryptedPassword, birth_date: "1990-08-04", phone: "42311455822", updatedAt: "2023-05-01", createdAt: "2023-01-04" }



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