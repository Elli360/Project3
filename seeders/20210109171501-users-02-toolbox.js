'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('toolboxes', [
      {
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        rentalDate: new Date(),
      },
      {
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        rentalDate: new Date(),
      },
      {
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        rentalDate: new Date(),
      },
      {
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        rentalDate: new Date(),
      }

      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('toolbox')
  }


};
