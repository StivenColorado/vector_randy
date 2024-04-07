const express = require('express');
const router = express.Router();
const controller = require('../controllers/datacontroller'); // Ajusta la ruta según la ubicación real
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const directorioImagenes = path.join(__dirname, '../', 'imagenes');
console.log(`FUCKING DIRECTORIO : `+directorioImagenes)
if (!fs.existsSync(directorioImagenes)) {
    fs.mkdirSync(directorioImagenes);
}

const storage = multer.diskStorage({
    destination: directorioImagenes,
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    },
});

const upload = multer({ storage: storage });


// Definir rutas y asignarlas a funciones del controlador
router.post('/validar_usuario', controller.validar_usuario);
router.post('/cargar_imagenes', upload.single('imagen'), controller.cargarImagenes);
router.post('/eliminar_imagen', controller.eliminarImagen);


router.get('/', controller.root);
router.get('/imagenes', controller.imagenes);




module.exports = router;
