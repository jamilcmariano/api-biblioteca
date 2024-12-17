class Autor {
    constructor() {
        this.autores = [
            { id: 1, nombre: "Juan Bosch", nacionalidad: "Dominicano" },
            { id: 2, nombre: "Pedro Mir", nacionalidad: "Dominicano" },
            { id: 3, nombre: "Salomé Ureña", nacionalidad: "Dominicana" },
            { id: 4, nombre: "Manuel del Cabral", nacionalidad: "Dominicano" },
            { id: 5, nombre: "Aída Cartagena Portalatín", nacionalidad: "Dominicana" }
        ];
    }

    obtenerTodos() {
        return this.autores;
    }

    obtenerPorId(id) {
        return this.autores.find(autor => autor.id === id);
    }
}

module.exports = new Autor();