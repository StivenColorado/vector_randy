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

const validar_usuario = (req, res) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;

    if (!correo || !contrasena) {
        return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
    }

    pool.query('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?', [correo, contrasena], (error, results) => {
        if (error) {
            console.error('Error al validar usuario:', error);

            // Detectar errores específicos y proporcionar mensajes adecuados
            if (error.code === 'ER_DBACCESS_DENIED_ERROR') {
                return res.status(500).json({ mensaje: 'Acceso denegado a la base de datos' });
            } else {
                return res.status(500).json({ mensaje: 'Error interno del servidor' });
            }
        } else {
            if (results.length > 0) {
                return res.status(200).json({ mensaje: 'Usuario válido' });
            } else {
                return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
            }
        }
    });
};

module.exports = {
    obtenerUsuarios,
    validar_usuario
    // Agregar más funciones de controlador según sea necesario
};