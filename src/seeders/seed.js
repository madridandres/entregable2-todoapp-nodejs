const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos_categories.models')

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
        title: 'Estudiar node',
        description: 'Descripción 1 del usuario 1',
        userId: 1
    },
    {
        title: 'Pasear al perro',
        userId: 1
    },
    {
        title: 'Lavar platos',
        description: 'Descripción 1 del usuario 2',
        userId: 2
    },
    {
        title: 'Ir al chequeo mensual',
        description: 'Descripción 1 para el usuario 3',
        userId: 3
    }
];

const categories = [
    {
        name: 'personal'
    },
    {
        name: 'educacion'
    },
    {
        name: 'salud'
    },
    {
        name: 'trabajo'
    },
    {
        name: 'hogar'
    },
    {
        name: 'cocina'
    },
    {
        name: 'deporte'
    },
    {
        name: 'ocio'
    },
    {
        name: 'financiero'
    },
    {
        name: 'entretenimiento'
    },
];

const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
];

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
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));     
        }, 250)
        setTimeout(() => {
            todosCategories.forEach((tc) => TodosCategories.create(tc));     
        }, 400);
    })
    .catch(error => console.log(error));