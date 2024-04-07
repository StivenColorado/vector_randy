const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const path = require('path');
const port = db.port;
const host = db.host;
const app = express();

const allowedOrigins = ['*','https://vector-randy.onrender.com/api/validar_usuario','https://vector-randy.onrender.com/api/eliminar_imagen','https://vector-randy.onrender.com/api/imagenes/','https://vector-randy.onrender.com/api/cargar_imagenes'];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
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
  console.log(`Servidor escuchando en ${host}:${port}/api`);
});
