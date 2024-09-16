const hello = (req, res) => {
    res.json({
        status: 'OK', 'Mensagem': 'Olá Exercício'
    });
}

const calculadora = (req, res) => {
    const { num1, num2, operacao } = req.body; // Certifique-se de usar 'operacao' e não 'operador'
    console.log('Incoming Request Body:', req.body);

    let resultado;

    switch (operacao) {
        case '+':
            resultado = fSomar(num1, num2);
            break;
        case '-':
            resultado = fSubtrair(num1, num2);
            break;
        case '*':
            resultado = fMultiplicar(num1, num2);
            break;
        case '/':
            resultado = fDividir(num1, num2);
            break;
        default:
            return res.json({
                status: 'ERRO', 'Mensagem': 'Operação inválida'
            });
    }

    res.json({
        status: 'OK', 'Resultado': resultado
    });
}

const fSomar = (num1, num2) => num1 + num2;
const fSubtrair = (num1, num2) => num1 - num2;
const fMultiplicar = (num1, num2) => num1 * num2;
const fDividir = (num1, num2) => num1 / num2;

module.exports = {
    hello,
    calculadora
}
