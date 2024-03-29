/*
* Rutas de Usuario / Auth
* host + /api/auth
* */

const {Router} = require('express');
const {check} = require('express-validator');

/* Importaciones propias */
const {registerUser, loginUser, renewToken} = require('../controllers/auth');
const {validateFields} = require('../middlewares/validate-fields');
const {emailExists} = require('../helpers/db-validators');
const {validateJwt} = require('../middlewares/validate-jwt');

/* Configuración del router */
const router = Router();

/* Crear nuevo usuario */
router.post('/register', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('email').custom(emailExists),
    check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
    validateFields
], registerUser);

/* SignIn del usuario */
router.post('/', [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').notEmpty(),
    validateFields
], loginUser);

/* Renovar Token de usuario */
router.get('/renew-token', [validateJwt], renewToken);

module.exports = router;