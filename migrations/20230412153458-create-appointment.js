'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stylist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Stylists",
          key:"id"
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key:"id"
        },
         // onUpdate: 'CASCADE',
         // onDelete: 'CASCADE'
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Services",
          key:"id"
        },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};
