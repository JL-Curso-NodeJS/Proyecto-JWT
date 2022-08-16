// ARCHIVO PARA ESCRIBIR SCHEMES DE USUARIOS

const Joi = require('joi') 

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    edad: Joi.number().optional(),
    password: Joi.string().required(),
})

module.exports = {
    crearUsuario
}