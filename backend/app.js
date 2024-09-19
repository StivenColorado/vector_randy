const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const path = require('path');

const app = express();

// Usa el puerto proporcionado por Railway o el puerto local para desarrollo
const port = process.env.PORT || db.port;

app.use(cors({
  origin: 'https://vector-randy.vercel.app', // Ajusta este origen según tu frontend
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use('/api', routes);

// Agregar encabezado 'Access-Control-Allow-Credentials' en la respuesta
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}/api`);
});
