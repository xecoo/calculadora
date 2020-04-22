const fs = require('fs');

function Calculadora(firstValue, secondValue, operacao) {
    switch (operacao) {
        case "soma":
            result = firstValue + secondValue;
            const content = firstValue + " + " + secondValue + " = " + result;
            fs.writeFile('/log.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            break;
        case "subtracao":
            result = firstValue - secondValue;
            const content = firstValue + " - " + secondValue + " = " + result;
            fs.writeFile('/log.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            break;
        case "multiplicacao":
            result = firstValue * secondValue;
            const content = firstValue + " * " + secondValue + " = " + result;
            fs.writeFile('/log.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            break;
        default:
            result = firstValue / secondValue;
            const content = firstValue + " / " + secondValue + " = " + result;
            fs.writeFile('/log.txt', content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            break;
    }
    return result;
}

Calculadora();