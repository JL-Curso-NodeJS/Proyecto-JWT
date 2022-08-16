// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req, res, next) => {
        try {
            const users = await models.usuario.findAll()

            res.json({
                success: true,
                data: {
                    usuarios: users
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const user = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario
                }
            })
            if (!user) return next(errors.UsuarioInexistente)

            res.json({
                success: true,
                data: {
                    usuario: user
                }
            })

        } catch (err) {
            return next(err)
        }
    },


    crear: async (req, res, next) => {
        try {
            const user = await models.usuario.create(req.body)

            // encriptar contraseña con bcrypt
            user.password = user.cryptPassword(user.password) // encripto la contraseña
            await user.save() // guardo el usuario

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log('ejecutando prueba')

            res.json({
                message: "Hola mundo"
            })

        } catch (err) {
            console.log(err)
        }
    },

    subirArchivo: async (req, res, next) => {
        try {

            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)


           
            const ar = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!ar) { 

                const archivo = await models.archivo_usuario.create({
                    nombre: req.body.nombre, 
                    file: req.file ? req.file.filename : null, 
                    original_name: req.file ? req.file.originalname : null, 
                    usuarioId: req.body.usuarioId
                })
            }

            res.json({
                success: true,
                data: {
                    message: "archivo cargado"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarArchivo: async (req, res, next) => {
        try {

           
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)

           
            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo) return next(errors.ArchivoInexistente)


            res.download('uploads/archivos-usuarios/' + archivo.file, archivo.original_name)

        } catch (err) {
            return next(err)
        }
    }


}