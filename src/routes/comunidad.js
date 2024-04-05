const express = require('express');
const Comunidad = require('../models/comunidad'); // Asegúrate de que la ruta es correcta

const router = express.Router();

// Crear una nueva comunidad
router.post('/comunidades', async (req, res) => {
  try {
    const nuevaComunidad = new Comunidad(req.body);
    const comunidadGuardada = await nuevaComunidad.save();
    res.status(201).json(comunidadGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Buscar una comunidad por su ID
router.get('/comunidades/:id', async (req, res) => {
  try {
    const comunidad = await Comunidad.findById(req.params.id);
    if (!comunidad) {
      return res.status(404).json({ message: "Comunidad no encontrada" });
    }
    res.json(comunidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
