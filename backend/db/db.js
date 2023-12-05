// db.js

const fs = require('fs');
const mysql = require('mysql');

function conectarBaseDeDatos() {
    // Lee el archivo db.json
    //   const rawdata = fs.readFileSync('backend/config/db.json');
    const path = require('path');
    const rawdata = fs.readFileSync(path.resolve(__dirname, '../config/db.json'));

    const dbConfig = JSON.parse(rawdata);

    // Crea un pool de conexiones a la base de datos
    const pool = mysql.createPool({
        connectionLimit: 10, // Número máximo de conexiones en el pool
        host: dbConfig.host,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database
    });

    // Manejar eventos de cierre de la aplicación
    process.on('SIGINT', () => {
        pool.end((err) => {
            if (err) {
                return console.error('Error al cerrar el pool de conexiones:', err);
            }
            process.exit();
        });
    });

    return pool;
}

module.exports = conectarBaseDeDatos;
