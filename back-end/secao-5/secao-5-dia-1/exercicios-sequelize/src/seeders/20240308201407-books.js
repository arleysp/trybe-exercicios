'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Shining',
        author: 'Stephen King',
        pageQuantity: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        pageQuantity: 680,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Books', null, {});

  }
};
