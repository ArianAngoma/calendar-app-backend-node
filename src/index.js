const express = require('express');
const cors = require('cors');

/* Importaciones propias */
const {dbConnection} = require('./database/config');
require('dotenv').config();

/* Servidor de express */
const app = express();

/* DB */
dbConnection();

/* CORS */
app.use(cors());

/* Directorio público */
app.use(express.static('src/public'));

/* Lectura y parseo del body */
app.use(express.json());

/* Rutas */
/* Rutas para la autenticación */
app.use('/api/auth', require('./routes/auth'));
/* Rutas para los eventos */
app.use('/api/events', require('./routes/events'));

/* Escuchar peticiones */
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});