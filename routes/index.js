const express = require('express');
const router = express.Router();
const Biblioteca = require('../controllers/Biblioteca');

// Rutas para autores
router.get('/autores', Biblioteca.obtenerAutores);

// Rutas para libros
router.get('/libros', Biblioteca.obtenerLibros);
router.get('/libros/disponibles', Biblioteca.obtenerLibrosDisponibles);
router.get('/libros/nodisponibles', Biblioteca.obtenerLibrosNoDisponibles);

module.exports = router;
