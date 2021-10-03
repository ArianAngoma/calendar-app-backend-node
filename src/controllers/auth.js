/* SignUp del usuario */
const registerUser = (req, res) => {
    const {name, email, password, color} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Register',
        name, email, password, color
    });
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