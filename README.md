# API de Biblioteca
Estudiante: Jamil Castillo 22-SISN-2-029
API REST desarrollada con Express.js para gestionar una biblioteca digital.
Esta API permite gestionar autores y libros, incluyendo la posibilidad de obtener libros disponibles, no disponibles, y obtener libros por autor.

## Instalación

```bash
npm install
npm start
```

El servidor correrá en `http://localhost:3000`

## Endpoints

### Autores

#### GET /autores
- **Descripción**: Obtiene la lista de todos los autores
- **Respuesta**: Array de autores
```json
[
    {
        "id": 1,
        "nombre": "Gabriel García Márquez",
        "nacionalidad": "Colombiano"
    }
]
```

### Libros

#### GET /libros
- **Descripción**: Obtiene la lista de todos los libros
- **Respuesta**: Array de libros
```json
[
    {
        "id": 1,
        "titulo": "Cien años de soledad",
        "autorId": 1,
        "disponible": true
    }
]
```

#### GET /libros/disponibles
- **Descripción**: Obtiene solo los libros que están disponibles
- **Respuesta**: Array de libros disponibles

#### GET /libros/nodisponibles
- **Descripción**: Obtiene solo los libros que no están disponibles
- **Respuesta**: Array de libros no disponibles

## Estructura del Proyecto

```
src/
├── models/
│   ├── Autor.js
│   └── Libro.js
├── controllers/
│   └── Biblioteca.js
├── routes/
│   └── index.js
└── app.js
```

## Datos

Los datos se almacenan temporalmente en memoria utilizando objetos JSON dentro de las clases Autor y Libro.