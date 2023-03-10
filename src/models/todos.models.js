const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Todos = db.define('todos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_complete"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {  //para especificar que esta es la llave foranea
            model: Users, // se debe importar al principio el modelo
            key: "id" // se le especifica por que propiedad se comunican
        }
    }
})

module.exports = Todos;