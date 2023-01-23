const { Sequelize } = require('sequelize');
require("dotenv").config();
// crear una instancia con parametros de configuración de nuestra base de datos
// un objeto de configuración 
const db = new Sequelize({
    database: process.env.DB_NAME, // nombre de la base de datos
    username: process.env.DB_USER, // nombre del  usuario
    host: process.env.DB_HOST, // en que host se está ejecutando la base de datos (localhost o 127.0.0.1)
    port: process.env.DB_PORT, // puerto en el que se está ejecutando la base de datos
    password: process.env.DB_PASSWORD,
    dialect: "postgres", // el gestor de la base de datos que estamos usando (mysql, mariadb, postgres, etc)
    logging: false,
});

// exportar la instancia que acabamos de crear para poder usarla en otro lugar

module.exports = db;