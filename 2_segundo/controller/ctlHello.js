const hello = (req, res) => {
    res.json({
        status: 'OK', 'Mensagem': 'Olá Segundo'
    });
}

const helloUser = (req, res) => {
    const { username } = req.body;
    console.log('Incoming Request Body:', req.body);
    res.json({
        status: 'OK', 'Mensagem': `Olá ${username}`
    });
}

module.exports = {
    hello,
    helloUser
}
