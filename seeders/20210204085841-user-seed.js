'use strict';
const { hashingPassword } = require('../helpers/bcrypt.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        email: 'Admin@mail.com',
        password: hashingPassword('admin123'),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
