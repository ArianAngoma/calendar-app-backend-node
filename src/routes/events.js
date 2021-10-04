/*
* Rutas de Eventos
* host + /api/events
* */

const {Router} = require('express');
const {check} = require('express-validator');

/* Importaciones propias */
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const {validateJwt} = require('../middlewares/validate-jwt');

/* Configuración del router */
const router = Router();

/* Validación de eventos para todas las rutas de Eventos */
router.use(validateJwt);

/* Obtener eventos */
router.get('/', getEvents);

/* Crear evento */
router.post('/', createEvent);

/* Actualizar evento */
router.put('/:id', updateEvent);

/* Eliminar evento */
router.delete('/:id', deleteEvent);

module.exports = router;