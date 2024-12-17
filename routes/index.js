const express = require('express');
const cors = require('cors');
const Biblioteca = require('../controllers/Biblioteca');

const app = express();

// Configurar CORS antes de las rutas
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://frontend-biblioteca-eight.vercel.app'
  ]
}));

// Rutas para autores
app.get('/autores', Biblioteca.obtenerAutores);

// Rutas para libros
app.get('/libros', Biblioteca.obtenerLibros);
app.get('/libros/disponibles', Biblioteca.obtenerLibrosDisponibles);
app.get('/libros/nodisponibles', Biblioteca.obtenerLibrosNoDisponibles);

module.exports = app;
