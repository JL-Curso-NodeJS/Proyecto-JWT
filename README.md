# Proyecto-JWT
PARTE 5 - Este repositorio contiene nuestro proyecto finalizado con autenticación JWT

## Archivo .env en la raiz del proyecto
Crear un archivo llamado .env con los siguientes datos:

    PORT = 8000
    ENVIRONMENT = development
    DB_NAME = mi_bd
    DB_USERNAME = postgres
    DB_PASSWORD = password
    JWT_SECRET = "secret"
    

## Para ejecutar el proyecto
    
    npm install
    npm run db:create
    npm run db:migrate
    npm run db:seed
    npm start

## Dependencias utilizadas en el proyecto (extras a la PARTE 4)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21047550-d537164d-7db4-4422-8a5c-838114b23875?action=collection%2Ffork&collection-url=entityId%3D21047550-d537164d-7db4-4422-8a5c-838114b23875%26entityType%3Dcollection%26workspaceId%3D1f4f77c5-eb75-4ee8-99d0-fbd51cc092df#?env%5BLOCALHOST%208000%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJlbmFibGVkIjp0cnVlLCJzZXNzaW9uVmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpFaUxDSnBZWFFpT2pFMk5qUXdOakU0T0RRc0ltVjRjQ0k2TVRZMk5ESTBNVGc0TkgwLjQ2Z216ZWdkTlM4U3ZTZ1FCRmo5V01WVFNYdl9ZVTlIbDh1MFRWWkg3NDgiLCJzZXNzaW9uSW5kZXgiOjF9XQ==)

Documentación: https://documenter.getpostman.com/view/21047550/2s83YWn6FV

---

## Más información

- Video de Autenticación con JWT: https://youtu.be/YVA99el9M7A
- Video de Manejo de Archivos: https://youtu.be/gkNbViqCVsI
