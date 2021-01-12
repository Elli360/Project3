'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('rentals', [
      {
        toolboxId: 1,
        toolId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 1,
        toolId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 1,
        toolId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 1,
        toolId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 2,
        toolId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 2,
        toolId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 2,
        toolId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 2,
        toolId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 3,
        toolId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 3,
        toolId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 3,
        toolId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 3,
        toolId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 4,
        toolId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 4,
        toolId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 4,
        toolId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        toolboxId: 4,
        toolId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rentals')
  }


};
