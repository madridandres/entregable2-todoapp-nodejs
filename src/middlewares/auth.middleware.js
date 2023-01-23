const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    let {authorization: token} = req.headers; //con los dos puntos se le puede cambiar el nombre a una propiedad destructurada
    token = token.replace("Bearer ", "");
    console.log(token);
    jwt.verify
    (token, process.env.JWT_SECRET, 
    {algorithms: 'HS512'}, 
    (err, decoded) => {
        if(err) {
            res.status(400).json({
                error: "Invalid Token",
                message: "El token no es valido o ya expiró, envía un token correcto"
            });
        }else{
            console.log(decoded);
            next();
        }
    });
};

module.exports = authMiddleware;
//validamos el token

// si es valido lo dejamos pasar a la ruta

//si es invalido le degamos el paso