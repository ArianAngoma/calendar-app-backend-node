const bcrypt = require('bcryptjs');

/* Importaciones propias */
const User = require('../models/User');
const {generateJWT} = require('../helpers/jwt');

/* SignUp del usuario */
const registerUser = async (req, res) => {
    const {name, email, password, color} = req.body;

    /* Crear nuevo usuario */
    try {
        const user = new User({name, email, password, color});

        /* Encriptar password */
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        /* Guardar en DB */
        await user.save();

        /* Generar JWT */
        const token = await generateJWT(user.id);

        res.status(201).json({
            ok: true,
            user: {
                uid: user.id,
                name: user.name,
                color: user.color,
                token
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
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        /* Verificar si el email existe */
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({
            ok: false,
            msg: `No existe usuario con el email ${email}`
        });

        /* Verificar la contraseña */
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) return res.status(400).json({
            ok: false,
            msg: 'Password incorrecto'
        });

        /* Generar JWT */
        const token = await generateJWT(user.id);

        res.status(201).json({
            ok: true,
            user: {
                uid: user.id,
                name: user.name,
                color: user.color,
                token
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

/* Renovar Token */
const renewToken = async (req, res) => {
    const {_id} = req.user;

    /* Generara nuevo JWT */
    const token = await generateJWT(_id);

    res.json({
        ok: true,
        token
    });
}

module.exports = {
    registerUser,
    loginUser,
    renewToken
}