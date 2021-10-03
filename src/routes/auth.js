/*
* Rutas de Usuario / Auth
* host + /api/auth
* */

const {Router} = require('express');

/* Importaciones propias */
const {registerUser, loginUser, renewToken} = require('../controllers/auth');

/* Configuración del router */
const router = Router();

/* Crear nuevo usuario */
router.post('/register', registerUser);

/* SignIn del usuario */
router.post('/', loginUser);

/* Renovar Token de usuario */
router.get('/renew-token', renewToken);

module.exports = router;