const moment = require('moment');

/* Validar si es una fecha válida */
const isDate = (value, {req, location, path}) => {
    // console.log({value, req, location, path});
    if (!value) return false;

    const date = moment(value);

    return date.isValid();
}

module.exports = {
    isDate
}