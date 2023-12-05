// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/datacontroller'); // Ajusta la ruta según la ubicación real

// Definir rutas y asignarlas a funciones del controlador
router.get('/usuarios', controller.obtenerUsuarios);

module.exports = router;
