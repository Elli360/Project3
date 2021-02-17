'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('tools', [
      {
        name: "Circular Saw",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:1
      },
      {
        name: "Drill",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:1
      },
      {
        name: "Routter",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:1
      },
      {
        name: "Hand Saw",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:2
      },
      {
        name: "Hammer",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:2
      },
      {
        name: "Pliers",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:2
      },
      {
        name: "Rake",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:3
      },
      {
        name: "Shovel",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:3
      },
      {
        name: "Mower",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:3
      },
      {
        name: "Band saw",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:4
      },
      {
        name: "Table Saw",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:4
      },
      {
        name: "Router Table",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:4
      },
      {
        name: "Nails",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:5
      },
      {
        name: "Screws",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:5
      },
      {
        name: "Drill Bits",
        description: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
        price: 10.0,
        categoryId:5
      }
      
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tools')
  }


};
