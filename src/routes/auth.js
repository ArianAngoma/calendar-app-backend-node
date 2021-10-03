/*
* Rutas de Usuario / Auth
* host + /api/auth
* */

const {Router} = require('express');

/* Configuración del router */
const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true
    });
});

module.exports = router;