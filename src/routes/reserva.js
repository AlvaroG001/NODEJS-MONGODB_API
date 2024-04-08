const express = require("express");
const reservaSchema = require("../models/reserva");

const router = express.Router();


// Obtener todas las respuestas
router.get('/reservas', (req, res) => {
    reservaSchema
        .find()
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

module.exports = router;