/* Importaciones propias */
const Event = require('../models/Event');

/* Obtener eventos */
const getEvents = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: 'Obtener eventos'
    });
}

/* Crear evento */
const createEvent = async (req, res) => {
    const {title, notes, start, end} = req.body;
    const {_id} = req.user;

    try {
        const event = new Event({title, notes, start, end, user: _id});
        await event.save();

        res.status(201).json({
            ok: true,
            event
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
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