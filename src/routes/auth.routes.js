// RUTAS PARA AUTENTICAR

const router = require("express").Router()
const authController = require('../controllers/auth.controller') 

router.post('/login',  authController.login) 
router.post('/registrarse', authController.registrarse)


module.exports = router