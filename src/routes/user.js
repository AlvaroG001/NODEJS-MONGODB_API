const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// Crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body); //Crea un usuario

    user
        .save() //Guardo usuario en mongodb
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

// Obtener todos los usuarios
router.get('/users', (req, res) => {
    userSchema
        .find() //Busco todos los usuarios en mongodb
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

// Obtener usuario por el id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id) //Busco usuario por id en mongodb
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

// Actualizar usuario
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
        .updateOne({_id: id}, { $set:  {name, age, email} }) //Actualizo el nombre y edad del usuario con el id proporcionado
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

// Eliminar usuario
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({_id: id})
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

// Ruta para autenticar usuario
router.post('/users/auth', (req, res) => {
    const { email, password } = req.body;
    
    // Busca el usuario por email
    userSchema.findOne({ email: email })
        .then(user => {
            if (user) {
                // Comprueba si las contraseñas coinciden (comparación directa)
                if (password === user.password) {
                    res.json(user);
                } else {
                    res.status(401).json({ message: "Auth failed" });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch((error) => res.json({ message: error }));
});

// Ruta para comprobar correo
router.post('/users/check-email', async (req, res) => {
    const { email } = req.body;
    const user = await userSchema.findOne({ email });
    res.json({ exists: !!user });
  });

module.exports = router;
