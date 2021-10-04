/*
* Rutas de Eventos
* host + /api/events
* */

const {Router} = require('express');
const {check} = require('express-validator');

/* Importaciones propias */
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const {validateFields} = require('../middlewares/validate-fields');
const {validateJwt} = require('../middlewares/validate-jwt');
const {isDate} = require('../helpers/is-date');
const {eventExistByIdAndUserIsToken} = require('../helpers/db-validators');

/* Configuración del router */
const router = Router();

/* Validación de eventos para todas las rutas de Eventos */
router.use(validateJwt);

/* Obtener eventos */
router.get('/', getEvents);

/* Crear evento */
router.post('/', [
    check('title', 'El título es obligatorio').notEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validateFields
], createEvent);

/* Actualizar evento */
router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(eventExistByIdAndUserIsToken),
    validateFields
], updateEvent);

/* Eliminar evento */
router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(eventExistByIdAndUserIsToken),
    validateFields
], deleteEvent);

module.exports = router;