const express = require('express');
const router = express.Router();
const controller = require('../controllers/datacontroller'); // Ajusta la ruta según la ubicación real
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const directorioImagenes = path.join(__dirname, '../', 'imagenes');
console.log(`DIRECTORIO : `+directorioImagenes)
if (!fs.existsSync(directorioImagenes)) {
    fs.mkdirSync(directorioImagenes);
}

// Configura el almacenamiento con multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directorioImagenes = path.join(__dirname, '../', 'imagenes');
        fs.mkdirSync(directorioImagenes, { recursive: true }); // Asegura que el directorio existe
        cb(null, directorioImagenes);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Usa el nombre original del archivo
    }
});

const upload = multer({ storage: storage });

// Definir rutas y asignarlas a funciones del controlador
router.post('/validar_usuario', controller.validar_usuario);
// router.post('/cargar_imagenes', upload.single('imagen'), controller.cargarImagenes);
router.post('/cargar_imagenes', upload.array('imagenes'), controller.cargarImagenes);
router.post('/eliminar_imagen', controller.eliminarImagen);


router.get('/', controller.root);
router.get('/imagenes', controller.imagenes);




module.exports = router;
