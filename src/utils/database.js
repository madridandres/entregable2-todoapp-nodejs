const { Sequelize } = require('sequelize');

// crear una instancia con parametros de configuración de nuestra base de datos
// un objeto de configuración 
const db = new Sequelize({
    database: "todoapp", // nombre de la base de datos
    username: "postgres", // nombre del  usuario
    host: "localhost", // en que host se está ejecutando la base de datos (localhost o 127.0.0.1)
    port: "5432", // puerto en el que se está ejecutando la base de datos
    password: "root",
    dialect: "postgres" // el gestor de la base de datos que estamos usando (mysql, mariadb, postgres, etc)
});

// exportar la instancia que acabamos de crear para poder usarla en otro lugar

module.exports = db;