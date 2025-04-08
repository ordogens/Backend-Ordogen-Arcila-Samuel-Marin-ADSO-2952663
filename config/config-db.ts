import mysql from 'mysql2'; // Importa el módulo mysql2 para poder trabajar con bases de datos MySQL
import dotenv from "dotenv"; // Importa dotenv para manejar variables de entorno desde un archivo .env
dotenv.config(); // Carga las variables de entorno del archivo .env al proceso de Node.js

const db = mysql.createPool({ // Crea un pool de conexiones a la base de datos para manejar múltiples conexiones de forma eficiente
    host: process.env.DB_HOST, // Define el host de la base de datos, tomado de una variable de entorno
    user: process.env.DB_USERNAME, // Usuario de la base de datos, también desde una variable de entorno
    password: process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
    database: process.env.DB_DATABASE, // Nombre de la base de datos a la que se quiere conectar
    connectionLimit: 10, // Número máximo de conexiones simultáneas en el pool
    queueLimit: 0 // Número máximo de conexiones en espera; 0 significa sin límite
});

export default db.promise(); // Exporta la conexión en modo "promise" para poder usar async/await con las consultas
