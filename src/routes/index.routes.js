// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express")

const usuarioRoutes = require("./usuario.routes")
const authRoutes = require("./auth.routes")

const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
  const router = Router()

  router.use("/usuarios", decodeJWT, usuarioRoutes)

  return router
}

const rutas_auth = () => {
  const router = Router()

  router.use("/auth", authRoutes)

  return router
}

module.exports = { rutas_init , rutas_auth } 
