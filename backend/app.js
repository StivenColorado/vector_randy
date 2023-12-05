// app.js
const routes = require('./routes/routes')
const db = require('./config/db.json')
const cors = require('cors');
const express = require('express');
const app = express();
const port = db.port;

// Obtén el pool de conexiones a la base de datos
app.use(cors());
app.use('/api', routes);
// Aquí puedes utilizar el pool para realizar operaciones con la base de datos
app.use('/', (req,res) =>{
  res.send(`Hola mundo`);
});


// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
