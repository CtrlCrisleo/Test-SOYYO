# Filtro de consulta de entidades

![Status](https://img.shields.io/badge/Status-Finalizado-brigthgreen)
![Node.js](https://img.shields.io/badge/Node.js-v18.14.0-blueviolet)

Desarrollo de una API que, dado un rango de códigos de entidades o empresas clientes, genera un listado con las propiedades de cada entidad ordenadas alfabéticamente, según el nombre, de forma ascendente.

## API - Filtro de consulta de entidades

### Instalación

1. Confirmar que Node.js esté instalado en el equipo `node -v`
2. Instalar la biblioteca de JavaScript Axios `npm i axios`
3. Instalar el framework de aplicaciones web para Node.js Express `npm i express`
4. Instalar el middleware para Node.js Morgan `npm i morgan`
5. Instalar la herramienta Nodemon como una dependencia de desarrollo `npm i nodemon -D`

### Ejecución:

1. Iniciar el servidor de desarrollo de la aplicación Node.js `npm run dev`
2. Desde la herramienta [Postman](https://www.postman.com/) enviar el método `GET` con la siguiente URL:

http://localhost:3000/api/entities/{startCode}/{endCode}

Dónde:
* `startCode` = Valor inicial del rango seleccionado para realizar la consulta.
* `endCode` = Valor final del rango seleccionado para realizar la consulta.

## Unit Test

### Instalación

1. Instalar el marco de pruebas de JavaScript Jest como una dependencia de desarrollo `npm i jest -D`
2. Instalar la biblioteca de pruebas de integración de JavaScript Supertest como una dependencia de desarrollo `npm i supertest -D`
3. Instalar la biblioteca de análisis de argumentos de línea de comandos para aplicaciones Node.js Yargs versión 15.4.1 como una dependencia de desarrollo `npm i yargs@15.4.1 -D`

### Ejecución

1. Comando para ejecución de pruebas con rango de entrada `default` `npm test`
2. Comando para ejecución de pruebas con rango de entrada definido `npm test -- --startId='startCode' --endId='endCode'`

Dónde:
* `startCode` = Valor inicial del rango seleccionado para realizar la consulta.
* `endCode` = Valor final del rango seleccionado para realizar la consulta.

## Tecnologías utilizadas

* [Node.js](https://nodejs.org/en/) v18.14.0
* [Axios](https://axios-http.com/) v1.3.4
* [Express](https://expressjs.com/) v4.18.2
* [Morgan](https://expressjs.com/en/resources/middleware/morgan.html) v1.10.0

### Dependencias de desarrollo

* [Nodemon](https://nodemon.io/) v2.0.21
* [Jest](https://jestjs.io/) v29.4.3
* [Supertest]() v6.3.3
* [Yargs](http://yargs.js.org/) v15.4.1
