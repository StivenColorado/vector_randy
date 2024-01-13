const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const cors = require('cors');
const express = require('express');
const port = db.port;
const app = express();
const path = require('path')

app.use(cors())

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use('/api/imagenes', express.static(path.join(__dirname, 'imagenes')));

// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json()); // bodyParser.json() ya no es necesario con express v4.16.0 y superior
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
