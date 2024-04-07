const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const path = require('path');
const port = 3300;
const host = db.host;
const app = express();

// Configurar CORS para permitir todas las solicitudes desde cualquier origen
app.use(cors({ 
  credentials: true,
  origin: 'http://localhost:5173' // Cambia esto por el origen permitido en tu caso
}));

// Resto de los middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use('/api', routes);

// Agregar encabezado 'Access-Control-Allow-Credentials' en la respuesta
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.listen(port, () => {
  console.log(`Servidor escuchando en ${host}:${port}`);
});
