'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('categories', [{
        name: "Power Tools",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hand Tools",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Outdoor Tools",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Workshop Tools",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hardware",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories')
  }


};
