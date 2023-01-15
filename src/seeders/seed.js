const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');

const users = [
    {
        username: 'Andres',
        email: 'andres@gmail.com',
        password: '1234'
    },
    {
        username: 'Nicolas',
        email: 'nico@gmail.com',
        password: '1212'
    },
    {
        username: 'Felipe',
        email: 'fepe@gmail.com',
        password: '2134'
    }
];

const todos = [
    {
        title: 'Tarea 1',
        description: 'Descripción 1 del usuario 1',
        userId: 1
    },
    {
        title: 'Tarea 2',
        userId: 1
    },
    {
        title: 'Tarea 1',
        description: 'Descripción 1 del usuario 2',
        userId: 2
    },
    {
        title: 'Tarea 1',
        description: 'Descripción 1 para el usuario 3',
        userId: 3
    }
];

//const categories = [];

//const todosCategories = [];

// create --> para crear informacion
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
    .then(() => {
        console.log('Iniciando con el sembradio malicioso');
        users.forEach((user) => Users.create(user));
        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100) //el tiempo de diferencia entre las ejecuciones
    })
    .catch(error => console.log(error));