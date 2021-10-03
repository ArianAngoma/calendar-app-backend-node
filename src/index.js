const express = require('express');
require('dotenv').config();

/* Servidor de express */
const app = express();

/* Directorio público */
app.use(express.static('src/public'));

/* Lectura y parseo del body */
app.use(express.json());

/* Rutas */
/* Rutas para la autenticación */
app.use('/api/auth', require('./routes/auth'));

/* Escuchar peticiones */
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});