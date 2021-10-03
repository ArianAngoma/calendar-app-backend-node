const express = require('express');
require('dotenv').config();

/* Servidor de express */
const app = express();

/* Directorio público */
app.use(express.static('src/public'));

/* Rutas */
app.get('/', (req, res) => {
    res.json({
        ok: true
    });
});

/* Escuchar peticiones */
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});