# Sistema de Gestión de Red Social con Sequelize

Este proyecto es una práctica universitaria para la asignatura de Base de Datos, que implementa un sistema básico de red social utilizando Node.js, Express, y Sequelize como ORM para MySQL.

## Descripción

El sistema permite gestionar tres entidades principales:

1. Usuarios
2. Publicaciones
3. Comentarios

Cada entidad tiene su propio modelo, controlador y rutas, siguiendo una estructura MVC (Modelo-Vista-Controlador).

## Requisitos

- Node.js
- MySQL
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/betooxx-dev/bdd-crud-sequelize
   ```
2. Navega al directorio del proyecto:
   ```
   cd bdd-crud-sequelize
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PORT=3000
   DATABASE=nombre_de_tu_base_de_datos
   USER=tu_usuario_mysql
   PASSWORD=tu_contraseña_mysql
   HOST=localhost
   DB_PORT=3306
   ```

## Uso

1. Inicia el servidor:
   ```
   npm start
   ```
2. El servidor se iniciará en `http://localhost:3000` (o el puerto que hayas especificado en el archivo `.env`)

3. Utiliza las siguientes rutas para interactuar con la API:

   - Usuarios: `/api/usuario`
   - Publicaciones: `/api/publicaciones`
   - Comentarios: `/api/comentarios`

   Cada ruta soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando los métodos HTTP apropiados.

## Estructura del proyecto

```
├── controllers/
│   ├── usuario.controller.js
│   ├── publicacion.controller.js
│   └── comentario.controller.js
├── models/
│   ├── usuario.model.js
│   ├── publicacion.model.js
│   └── comentario.model.js
├── routes/
│   ├── usuario.routes.js
│   ├── publicacion.routes.js
│   └── comentario.routes.js
├── app.js
├── db.js
├── index.js
├── relaciones.js
└── .env
```

## Características

- Uso de Sequelize como ORM para MySQL
- Implementación de operaciones CRUD para cada entidad
- Relaciones entre entidades (por ejemplo, publicaciones asociadas a usuarios)
- Consultas personalizadas (por ejemplo, buscar publicaciones por usuario)
- Manejo de errores básico
- Uso de variables de entorno para configuración

## Consideraciones

- Este es un ejemplo educativo y no debe usarse en producción sin implementar medidas de seguridad adicionales.
- Se recomienda implementar autenticación y autorización para proteger las rutas.
- En un entorno de producción, se debería implementar un manejo más robusto de errores y validaciones.
