import express from 'express'; // Importa el framework Express para crear la aplicación web
import cors from 'cors'; // Importa el middleware CORS para permitir solicitudes entre dominios
import dotenv from 'dotenv'; // Importa dotenv para cargar variables de entorno desde el archivo .env
import morgan from 'morgan'; // Importa morgan para el logging de las peticiones HTTP
import ProductRoutes from './routes/Product.routes'; // Importa las rutas de productos definidas en otro archivo
import UserRoutes from './routes/user.routes';

// Load environment variables
dotenv.config(); // Carga las variables de entorno definidas en el archivo .env

// Create Express app
const app = express(); // Crea una nueva instancia de la aplicación Express

// Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite el parsing de JSON en las peticiones
app.use(morgan('dev')); // Configura el logging en modo desarrollo

// Routes
app.use('/productos', ProductRoutes); // Monta las rutas de la API bajo el prefijo /api
app.use('/usuarios', UserRoutes);
// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack); // Registra el error en la consola
    res.status(500).json({ message: 'Something went wrong!' }); // Envía una respuesta de error al cliente
});

// Start server
const PORT = process.env.PORT || 3000; // Define el puerto del servidor (usando variable de entorno o 3000 por defecto)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Muestra un mensaje cuando el servidor inicia
});

export default app; // Exporta la aplicación para uso en otros archivos
