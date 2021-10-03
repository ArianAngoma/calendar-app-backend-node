const {validationResult} = require('express-validator');

const registerUser = (req, res) => {
    const {name, email, password, color} = req.body;

    /* Manejo de errores */
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        ok: false,
        errors: errors.mapped()
    });

    res.status(201).json({
        ok: true,
        msg: 'Register',
        name, email, password, color
    });
}

const loginUser = (req, res) => {
    const {email, password} = req.body;

    /* Manejo de errores */
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({
        ok: false,
        errors: errors.mapped()
    });

    res.status(201).json({
        ok: true,
        msg: 'Login',
        email, password
    });
}

const renewToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'Renew'
    });
}

module.exports = {
    registerUser,
    loginUser,
    renewToken
}