const express = require("express");
const reservaSchema = require("../models/reserva");

const router = express.Router();


// get all reservas
router.get('/reservas', (req, res) => {
    reservaSchema
        .find() //Busco todos los usuarios en mongodb
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error })) 
});

module.exports = router;