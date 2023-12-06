const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const cors = require('cors');
const express = require('express');
const port = db.port;
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mueve esta línea antes de la siguiente línea
app.use('/api', routes);

// Comenté esta línea ya que express.json() ya se incluye con bodyParser.json()
// app.use(express.json());

// Ruta para otras solicitudes
app.use('/', (req, res) => {
  res.send(`Hola mundo`);
});

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
