const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user'); // Asegúrate de que estas rutas aún existan
const reservaRoutes = require('./routes/reserva'); // Asegúrate de que estas rutas aún existan
const comunidadRoutes = require('./routes/comunidad'); // Nueva línea
const reunionRoutes = require('./routes/reunion'); // Nueva línea


const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', reservaRoutes);
app.use('/api', comunidadRoutes); // Nueva línea
app.use('/api', reunionRoutes); // Nueva línea


app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
