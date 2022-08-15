// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") 

const usuarioRoutes = require("./usuario.routes") 

const rutas_init = () => { 
  const router = Router() 

  router.use("/usuarios", usuarioRoutes) 

  return router 
};

module.exports = { rutas_init } 
