# Test-SOYYO

![Node.js](https://img.shields.io/badge/Node.js-v18.14.0-brightgreen)

1. Confirmar que tengamos instalado Node.js en el equipo: node -v
2. Instalar la bibliotexa de JavaScript Axios: npm i axios
3. Instalar el framework de aplicaciones web para Node.js Express: npm i express
4. Instalar el middleware para Node.js Morgan: npm i morgan
5. Instalar la herramienta Nodemon como una dependencia de desarrollo: npm i nodemon -D

Ejecución:

1. Iniciar el servidor de desarrollo de la aplicación Node.js: npm run dev
2. Desde la herramienta postman enviar el método GET con la siguiente URL:
http://localhost:3000/api/entities/{startCode}/{endCode}
Dónde:
startCode = Valor inicial del rango seleccionado para realizar la consulta.
endCode = Valor final del rango seleccionado para realizar la consulta.

Unit Test

1. Instalar Jest: npm i jest -D
2. Instalar Supertest: npm i supertest -D
3. Instalar Yargs versión 15.4.1: npm i yargs@15.4.1 -D
4. Ejecutar test con las variables del rango de entrada: 
npm test
npm test -- --startId='x' --endId='y'
