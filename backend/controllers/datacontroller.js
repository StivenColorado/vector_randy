// Obtén el pool de conexiones a la base de datos
const conectarBaseDeDatos = require('../db/db')
const pool = conectarBaseDeDatos();
const fs = require('fs')
const path = require('path')

const root = (req, res) => {
    res.send('hola mundo')
}

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

const imagenes = (req, res) => {
    const directorioImagenes = path.join(__dirname, '../', 'imagenes');

    fs.readdir(directorioImagenes, (err, archivos) => {
        if (err) {
            console.error('Error al leer el directorio de imágenes:', err);
            return res.status(500).send('Error interno del servidor');
        }

        // Filtra solo los archivos de imagen
        const imagenes = archivos
            .filter(archivo => /\.(jpg|jpeg|png|gif)$/i.test(archivo))
            .map(archivo => `/api/imagenes/${archivo}`); // Agrega la ruta completa

        // Devuelve las rutas completas de los archivos de imagen
        res.send({ imagenes });
    });
};

const cargarImagenes = (req, res) => {
    const directorioImagenes = path.join(__dirname, '../', 'imagenes');

    if (!fs.existsSync(directorioImagenes)) {
        fs.mkdirSync(directorioImagenes);
    }

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ mensaje: 'No se proporcionó ninguna imagen' });
    }

    const imagen = req.files.imagen;

    const rutaImagen = path.join(directorioImagenes, imagen.name);

    try {
        fs.writeFileSync(rutaImagen, imagen.data);

        res.status(200).json({ mensaje: 'Imagen cargada correctamente' });
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor al cargar la imagen' });
    }
};

module.exports = {
    root,
    obtenerUsuarios,
    validar_usuario,
    imagenes,
    cargarImagenes,
    // Agregar más funciones de controlador según sea necesario
};