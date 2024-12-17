const Autor = require('../models/Autor');
const Libro = require('../models/Libro');

class Biblioteca {
    static async obtenerAutores(req, res) {
        try {
            const autores = await Autor.obtenerTodos();
            res.json(autores);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener autores' });
        }
    }

    static async obtenerLibros(req, res) {
        try {
            const libros = await Libro.obtenerTodos();
            res.json(libros);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener libros' });
        }
    }

    static async obtenerLibrosDisponibles(req, res) {
        try {
            const librosDisponibles = await Libro.obtenerDisponibles();
            res.json(librosDisponibles);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener libros disponibles' });
        }
    }

    static async obtenerLibrosNoDisponibles(req, res) {
        try {
            const librosNoDisponibles = await Libro.obtenerNoDisponibles();
            res.json(librosNoDisponibles);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener libros no disponibles' });
        }
    }
}

module.exports = Biblioteca;