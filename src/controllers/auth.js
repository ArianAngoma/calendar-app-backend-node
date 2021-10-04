/* Importaciones propias */
const User = require('../models/User');

/* SignUp del usuario */
const registerUser = async (req, res) => {
    const {name, email, password, color} = req.body;

    /* Guardar nuevo usuario */
    try {
        const user = new User({name, email, password, color});
        await user.save();

        res.status(201).json({
            ok: true,
            user: {
                uid: user.id,
                name: user.name,
                color: user.color
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        });
    }
}

/* SignIn del usuario */
const loginUser = (req, res) => {
    const {email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Login',
        email, password
    });
}

/* Renovar Token */
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