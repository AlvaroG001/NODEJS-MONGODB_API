const mongoose = require('mongoose');

const comunidadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cinema: { type: Boolean, required: true },
  gym: { type: Boolean, required: true },
  library: { type: Boolean, required: true },
  padel: { type: Boolean, required: true },
  pool: { type: Boolean, required: true }
});

module.exports = mongoose.model('Comunidad', comunidadSchema, 'comunidades');
// Mongoose pluraliza automáticamente el nombre y lo convierte en minúsculas 
// para el nombre de la colección en la base de datos. Por eso estás viendo 
// comunidads en lugar de comunidades.
// Para evitar este comportamiento y usar un nombre específico para tu colección, 
// puedes pasar un tercer argumento a mongoose.model() con el nombre exacto de 
// la colección que deseas usar "comunidades"