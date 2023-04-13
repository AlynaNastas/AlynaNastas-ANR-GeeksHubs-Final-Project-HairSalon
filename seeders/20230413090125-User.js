'use strict';
const bcrypt = require('bcrypt');

const password = "123456"
const encryptedPassword = bcrypt.hashSync(password,12);



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',
  [
      {id: 1,name: "Alyna", surname: "Nastas Romaniuc", email: "alyna@alyna.com",password: encryptedPassword, birth_date: "1992-04-30", phone: "6766573883", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 2,name: "Giota",surname: "Chiamakioti", email: "giota@giota.com", password: encryptedPassword, birth_date: "1991-05-20", phone: "333222111", updatedAt: "2023-05-04", createdAt: "2023-05-04"},
      {id: 3,name: "Freddie", surname: "Swift", email: "freddie@freddie.com",password: encryptedPassword, birth_date: "1960-04-30", phone: "653373883", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 4,name: "Julia", surname: "Mconagan", email: "julia@julia.com",password: encryptedPassword, birth_date: "1993-10-10", phone: "676611283", updatedAt: "2023-03-04", createdAt: "2023-03-04"},
      {id: 5,name: "Wylde", surname: "Cristiana", email: "wylde@wylde.com",password: encryptedPassword, birth_date: "1986-04-10", phone: "556573883", updatedAt: "2022-03-04", createdAt: "2022-03-04"},
      {id: 6,name: "Maddie", surname: "Mae", email: "maddie@malouis.com",password: encryptedPassword, birth_date: "1990-08-04", phone: "4231173883", updatedAt: "2023-05-04", createdAt: "2023-05-04"},
      {id: 7,name: "Louis", surname: "Maharaj", email: "louis@.com",password: encryptedPassword, birth_date: "1986-04-10", phone: "5544443883", updatedAt: "2022-05-04", createdAt: "2021-03-04"},
      {id: 8,name: "Soraja", surname: "Hadzic", email: "soraja@soraja.com",password: encryptedPassword, birth_date: "1990-08-04", phone: "42311455883", updatedAt: "2023-05-04", createdAt: "2022-08-04"}



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
