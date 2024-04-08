const express = require('express');
const Reunion = require('../models/reunion');

const router = express.Router();

// Crear una nueva reunion
router.post('/reuniones', async (req, res) => {
  try {
    const nuevaReunion = new Reunion(req.body);
    const reunionGuardada = await nuevaReunion.save();
    res.status(201).json(reunionGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para obtener todas las reuniones o todas las reuniones por un comunity_id específico
// Para obtener todas las reuniones: GET http://localhost:3000/reuniones
// Para obtener reuniones por un comunity_id específico: 
// GET http://localhost:9000/api/reuniones?comunity_id=660d733335568af31b153279
router.get('/reuniones', async (req, res) => {
  try {
    let query = {};
    if (req.query.comunity_id) {
      query.comunity_id = req.query.comunity_id; // Filtra por comunity_id si se proporciona
    }
    const reuniones = await Reunion.find(query); // Utiliza el query para filtrar los resultados
    res.json(reuniones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar una reunion
router.delete('/reuniones/:id', async (req, res) => {
  try {
      const deletedMeeting = await Reunion.findByIdAndDelete(req.params.id);
      if (!deletedMeeting) {
          return res.status(404).json({ message: "Reunión no encontrada" });
      }
      res.status(200).json({ message: "Reunión eliminada con éxito" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

module.exports = router;
