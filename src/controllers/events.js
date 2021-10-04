/* Obtener eventos */
const getEvents = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Obtener eventos'
    });
}

/* Crear evento */
const createEvent = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Crear evento'
    });
}

/* Actualizar evento */
const updateEvent = (req, res) => {
    res.status(201).json({
       ok: true,
       msg: 'Actualizar evento'
    });
}

/* Eliminar evento */
const deleteEvent = (req, res) => {
    res.status(201).json({
    ok: true,
        msg: 'Eliminar evento'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}