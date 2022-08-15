'use strict'
const bcrypt = require('bcryptjs') // para encriptar la contraseña

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('usuario', 'password', {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: bcrypt.hashSync('password', 10) // Encripto la contraseña por defecto
            }),
        ])
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('usuarios');
    */
    }
}