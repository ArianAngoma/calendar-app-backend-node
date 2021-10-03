const registerUser = (req, res) => {
    const {name, email, password, color} = req.body;

    res.json({
        ok: true,
        msg: 'Register',
        name, email, password, color
    });
}

const loginUser = (req, res) => {
    const {email, password} = req.body;

    res.json({
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