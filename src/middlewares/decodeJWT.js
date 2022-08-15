const jwt = require('jsonwebtoken')
const errors = require('../const/errors')
const models = require('../database/models/index')
const moment = require('moment')
const globalConstants = require('../const/globalConstants')

module.exports = async function (req, res, next) {

    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {

            // Verifico el token y lo decodifico con la clave secreta para obtener los datos del usuario que lo creó y los guardo en la variable data 
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], globalConstants.JWT_SECRET)

            if (dataToken.exp <= moment().unix())
                return next(errors.SesionExpirada) // Si el token expiró, devuelvo error

            res.locals.token = dataToken 

            const usuario = await models.usuario.findOne({
                where: {
                    id: dataToken.id
                }
            })
            if (!usuario) return next(errors.UsuarioNoAutorizado)

            res.locals.usuario = usuario //me puedo guardar el usuario en el locals para usarlo en las rutas que necesiten el usuario

            next() // Si todo está bien, paso al siguiente middleware o controlador

        } catch (err) {
            return next(errors.SesionExpirada)
        }

    } else {
        return next(errors.UsuarioNoAutorizado)
    }


}