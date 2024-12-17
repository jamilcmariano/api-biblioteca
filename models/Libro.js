class Libro {
    constructor() {
        this.libros = [
            { id: 1, titulo: "La Mañosa", autorId: 1, disponible: true },
            { id: 2, titulo: "Hay un país en el mundo", autorId: 2, disponible: true },
            { id: 3, titulo: "Poesías Completas", autorId: 3, disponible: false },
            { id: 4, titulo: "Compadre Mon", autorId: 4, disponible: true },
            { id: 5, titulo: "La Tierra Escrita", autorId: 5, disponible: false },
            { id: 6, titulo: "Cuentos Escritos en el Exilio", autorId: 1, disponible: true },
            { id: 7, titulo: "Si el mundo fuera al revés", autorId: 2, disponible: true },
            { id: 8, titulo: "Chinola Kid", autorId: 4, disponible: false }
        ];
    }

    obtenerTodos() {
        return this.libros;
    }

    obtenerDisponibles() {
        return this.libros.filter(libro => libro.disponible);
    }

    obtenerNoDisponibles() {
        return this.libros.filter(libro => !libro.disponible);
    }
}

module.exports = new Libro();