// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Gonzalez",
                    email: "emailJuan@email.com",
                    edad: 25
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Pedro",
                    apellido: "Gomez",
                    email: "emailPedro@email.com",
                    edad: 67
                }
            })
        ])
    },
};