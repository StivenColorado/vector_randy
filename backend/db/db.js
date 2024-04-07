const fs = require('fs');
const mysql = require('mysql');
// import  db from "../config/db.json" 
const db  = require("../config/db.json")
function conectarBaseDeDatos() {

    // Crea un pool de conexiones a la base de datos
    const pool = mysql.createPool({
        connectionLimit: 10, // Número máximo de conexiones en el pool
        host: db.host,
        user: db.user,
        password: db.password,
        database: db.database
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
