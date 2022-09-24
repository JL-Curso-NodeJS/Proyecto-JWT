const models = require("../database/models/index")
const errors = require('../const/errors')
const bcrypt = require('bcryptjs') // para encriptar la contraseña

const signJWT = require('../middlewares/signJWT') // para crear el token

module.exports = {

    login: async (req, res, next) => {
        try {
            // 1. Verifico que el usuario exista solo comparando con el email
            const user = await models.usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
            var contraseniaCoincide = false
            if (user) {  // Si existe el usuario
                // 2. Verifico que la contraseña sea correcta
                contraseniaCoincide = bcrypt.compareSync(req.body.password, user.password) // Comparo la contraseña ingresada con la contraseña de la base de datos
            }
            if (!user || !contraseniaCoincide) {
                return next(errors.CredencialesInvalidas)
            }


            // 3. Si todo está bien, devuelvo el token
            res.json({
                success: true,
                data: {
                    token: signJWT(user), // Creo el token con los datos del usuario
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                }
            })
        } catch (err) {
            return next(err)
        }
    },

    registrarse: async (req, res, next) => {
        try {

            req.body.password = bcrypt.hashSync(req.body.password, 10) // encripto la contraseña

            const user = await models.usuario.create(req.body) // creo el usuario

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    }

}