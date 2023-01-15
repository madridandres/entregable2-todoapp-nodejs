// vamos a importar todos nuestros modelos creados
const Users = require('./users.model');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos_categories.models')


const initModels = () => {
    // Vamos a crear las relaciones
    // hasOne --> tiene uno
    // hasMany --> tiene muchos 
    // belongsTo --> pertenece a
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'}); // Una tarea PERTENECE A un usuario
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'}); // Un usuarios TIENE MUCHAS tareas

    // relacion de muchos a muchos entre categorias y tareas
    TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'});
    Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'});

    TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});

}

module.exports = initModels;