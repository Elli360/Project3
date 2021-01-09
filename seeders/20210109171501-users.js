'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [
      {
        email: "troy@test.com",
        password: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "danielli@test.com",
        password: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "shalom@test.com",
        password: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "luis@test.com",
        password: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users')
  }


};
