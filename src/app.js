// importamos express
const express = require('express');
//importamos la instancia que creamos en "./utils/database"
const db = require("./utils/database")

const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');

// crear una  instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

// probando la conexión a la base de datos
db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));

initModels();
// vamos a usar el metodo sync de nuestra bd
db.sync({ force: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" })
});

// definir las rutas de nuestros endpoints (ep = endpoints)
// localhost:8000/users --> todo para usarios
// localhost:8000/todos --> todo para tareas

// GET a /users
app.get('/users', async (req, res) => {
    try {
        //obtener el resultado de consultar a todos los usuarios de la base de datos
        const result = await Users.findAll(); // es como el SELECT * FROM users;
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// obtener un usuario obteniendo su Id
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.findByPk(id); // busca en la llave primaria
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// obtener un usuario por username
app.get("/users/username/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const result = await Users.findOne({ where: { username } }); // Select * from users WHERE username = ....
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// creando un usuario
app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

// actualizar un usuario, solo podemos cambiar password
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, {
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
})

// Eliminar un usuario --> id
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Users.destroy({
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});
//---------------------------------------------------------------------------//
// GET a /todos
app.get('/todos', async (req, res) => {
    try {
        //obtener el resultado de consultar a todas las tareas de la base de datos
        const result = await Todos.findAll(); // es como el SELECT * FROM users;
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// obtener una tarea por su Id
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todos.findByPk(id); // busca en la llave primaria
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});
// creando una tarea
app.post('/todos', async (req, res) => {
    try {
        const task = req.body;
        const result = await Todos.create(task);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});
// actualizar una tarea, solo podemos cambiar isComplete
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Todos.update(field, {
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
})

// Eliminar una tarea --> id
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todos.destroy({
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
