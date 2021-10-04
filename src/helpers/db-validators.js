/* Importaciones propias */
const User = require('../models/User');
const Event = require('../models/Event');

// users => Valida si email ya esta registrado en la DB
const emailExists = async (email = '') => {
    const existsEmail = await User.findOne({email});
    if (existsEmail) throw new Error(`El correo ${email} ya esta registrado`);
}

// events => Valida si existe un evento por id y si es el mismo usuario quien lo creó
const eventExistByIdAndUserIsToken = async (id, {req}) => {
    const existsEvent = await Event.findById(id);

    if (!existsEvent) throw new Error(`El evento con ${id} no existe`);
    if (existsEvent.user.toString() !== req.user.id) throw new Error(`No tiene privilegio de editar el evento con id ${id}`);
}

module.exports = {
    emailExists,
    eventExistByIdAndUserIsToken
}