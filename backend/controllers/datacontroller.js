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
        if (!error) {
            res.send({ 'users': results })
        } else {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Error interno del servidor');
        }
    });
};

const user = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al obtener usuarios:', error);
            // Manejo de errores
            return res.status(500).json({ mensaje: 'Error al obtener usuarios' });
        } else {
            // Devolver los resultados en formato JSON
            res.status(200).json({ usuarios: results });
        }
    });
}

const validar_usuario = (req, res) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    console.log(`correo y contrasena ${correo, contrasena}`)
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
    try {
        const imagen = req.file;
        console.log(`Imagen recibida: ${imagen.originalname}`);

        const directorioImagenes = path.join(__dirname, '../', 'imagenes');
        const rutaImagen = path.join(directorioImagenes, imagen.filename);
        console.log(`TIPO DE DATO : ${typeof rutaImagen} de  ${rutaImagen}`)

        fs.writeFile(rutaImagen, imagen.buffer, (err) => {
            if (err) {
                console.error('Error al cargar la imagen:', err);
                res.status(500).json({ mensaje: 'Error interno del servidor al cargar la imagen' });
            } else {
                res.status(200).json({ mensaje: 'Imagen cargada correctamente' });
            }
        });
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor al cargar la imagen' });
    }
};


const eliminarImagen = (req, res) => {
    try {
        const nombreArchivo = req.body.nombreArchivo;
        console.log(`nombre archivo HP: ${nombreArchivo}`)
        const directorioImagenes = path.join(__dirname, '../', 'imagenes');
        const rutaImagen = path.join(directorioImagenes, nombreArchivo);

        // Verifica si el archivo existe antes de intentar eliminarlo
        if (fs.existsSync(rutaImagen)) {
            fs.unlinkSync(rutaImagen);
            res.status(200).json({ mensaje: 'Imagen eliminada correctamente' });
        } else {
            res.status(404).json({ mensaje: 'La imagen no existe' });
        }
    } catch (error) {
        console.error('Error al eliminar la imagen:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor al eliminar la imagen' });
    }
};


module.exports = {
    root,
    obtenerUsuarios,
    validar_usuario,
    imagenes,
    cargarImagenes,
    eliminarImagen,
    user,
};