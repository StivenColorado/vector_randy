// Obtén el pool de conexiones a la base de datos
const conectarBaseDeDatos = require('../db/db')
const pool = conectarBaseDeDatos();

const obtenerUsuarios = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    obtenerUsuarios,
    // Agregar más funciones de controlador según sea necesario
};