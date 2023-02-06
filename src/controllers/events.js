/* Importaciones propias */
const Event = require('../models/Event');

/* Obtener eventos */
const getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('user', ['name']);
        res.json({
            ok: true,
            events
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
}

/* Crear evento */
const createEvent = async (req, res) => {
    const {title, notes, start, end} = req.body;
    const {_id} = req.user;

    try {
        const event = new Event({title, notes, start, end, bgColor, user: _id});
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
const updateEvent = async (req, res) => {
    const {id} = req.params;

    const {user, ...data} = req.body;
    data.user = req.user._id;

    try {
        const event = await Event.findByIdAndUpdate(id, data, {new: true});

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

/* Eliminar evento */
const deleteEvent = async (req, res) => {
    const {id} = req.params;

    try {
        // Físicamente borrado
        const event = await Event.findByIdAndDelete(id);
        // console.log(event);

        res.status(201).json({
            ok: true
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}