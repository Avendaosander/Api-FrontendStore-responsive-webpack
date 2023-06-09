﻿# FrontEnd Store

Login
Register
Tienda
Producto
Nosotros
Contactanos

Stack MongoDB NodeJS ExpressJS

### Instalación 🔧

Copiar repositorio
```
git clone https://github.com/Avendaosander/Api-FrontendStore-responsive-webpack.git
```
Instalar las dependecias en la carpeta server

```
Ejecutar el comando 'npm i'
```
Agregar el archivo .env al proyecto
```
Crear el archivo . env en la carpeta server './server'
```
```
PORT = 3000
URI = mongodb://localhost:27017/**name_of_database** 
SESSIONSECRET = KeySecret
SECRETTK = TokenSecret

```
Iniciar el servidor en la carpeta server
```
Ejecutar el comando  'npm run start'
```

Server is listen on port:  3000 || 4001
DB Conectada

(El servidor crea la DB de las franelas automaticamente si no hay ninguna franela)

Instalar las dependecias en la carpeta front

```
Ejecutar el comando 'npm i'
```
Iniciar dev sever en la carpeta front
```
Ejecutar el comando  'npm run dev'
```

## Ejecutando las pruebas ⚙️

Ejecutar dev server desde la carpeta "front"
Ejecutar servidor desde la carpeta "server"

**Register.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API. 
El modelo tiene una validacion que no permite guardar correos que ya esten registrados, ni contraseñas menores a 8 caracteres. ruta:  http://localhost:4001/register (POST)

```
Para Probar el Register. Ingresando el siguiente ejemplo en formato json (POST)
{
  "nombre": "Pedro",
  "email": "correodeprueba@gmail.com",
  "password": "1234567890",
  "repeatPassword": "1234567890"
}
```

**Login.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:4001/login (POST)

```
Para Probar el Login. Ingresando el siguiente ejemplo en formato json
{
    "email":"correodeprueba@gmail.com",
    "password": "1234567890"
}
```

**Tienda.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Para ir a la ruta principal, esto mostrará todos los productos disponibles.
http://localhost:4001/ (GET)
```

**Producto.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Muestra el producto seleccionado. 
http://localhost:4001/producto/:id (GET)
```
**Nosotros.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API  

```
Muestra algunas descripciones sobre la tienda.
http://localhost:4001/nosotros (GET)
```
**Contacto.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API, con http://localhost:4001/contacto (POST)

```
Para ponerse en contacto con el administrador del comercio. Ingresando el siguiente ejemplo en formato JSON
{
  "nombre": "Pedro",
  "apellido": "Perez",
  "email": "correodeprueba@gmail.com",
  "mensaje": "Mi primer mensaje de contacto desde formulario"
}
```

**Logout.** Puede Probar el Modelo usando Postman o cualquier plataforma que le permita usar una API (GET)
```
http://localhost:4001/logout (GET)
```

## Construido con 🛠️

-Nodejs 18.12.0
-Express 4.18.2
-MongoDB 6.0.4
-Mongoose 6.10.0
-Express-validator 6.15.0
-Express-session 1.17.3
-jsonwebtoken 9.0.0
-cors 2.8.5
-Connect-flash 0.1.1
-Bcryptjs 2.4.3
-Dotenv 16.0.3
-webpack 5.76.2

* [NodeJs](https://nodejs.org/en/docs/) 
* [Express](https://expressjs.com/en/5x/api.html) 
* [MongoDB](https://www.mongodb.com/docs/) 
* [Mongoose](https://mongoosejs.com/docs/) 
* [Webpack](https://webpack.js.org/concepts/) 


## Autor ✒️

* **Alexander Avendaño** - *Desarrollador* - [Avendaosander](https://github.com/Avendaosander)
