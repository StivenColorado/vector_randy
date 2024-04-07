const { Client } = require('pg');
// import db from "../config/db.json"
const db = require("../config/db.json");

function conectarBaseDeDatos() {

    // Crea un nuevo cliente PostgreSQL
    const client = new Client({
        connectionString: db.url,
        ssl: { rejectUnauthorized: false } // Establece rejectUnauthorized a false para evitar errores con certificados SSL
    });

    // Conectar al cliente PostgreSQL
    client.connect()
        .then(() => console.log('Conexión exitosa a Supabase'))
        .catch(error => console.error('Error de conexión:', error));

    // Manejar eventos de cierre de la aplicación
    process.on('SIGINT', () => {
        client.end((err) => {
            if (err) {
                return console.error('Error al cerrar el cliente PostgreSQL:', err);
            }
            process.exit();
        });
    });

    return client;
}

module.exports = conectarBaseDeDatos;
