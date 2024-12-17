const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS más permisiva
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://frontend-biblioteca-eight.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Añadido OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Añadido para soportar cookies/credenciales
  optionsSuccessStatus: 200 // Para navegadores antiguos/IE11
}));

// Middleware adicional para OPTIONS
app.options('*', cors()); // Habilita pre-flight para todas las rutas

// Middleware para parsear JSON
app.use(express.json());

// Middleware para establecer headers adicionales
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas
app.use('/', routes);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
