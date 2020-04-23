const fs = require('fs');

function calculadora(operacao) {
    let result =0;
    const firstValue = document.getElementById('fvalue').value;
    const secondValue = document.getElementById('svalue').value;
    switch (operacao) {
        case "soma":
            result = (Number(firstValue) + Number(secondValue));
            // const content = firstValue + " + " + secondValue + " = " + result;
            // fs.writeFile('/log.txt', content, err => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            // });
            break;
        case "subtracao":
            result = firstValue - secondValue;
            // const content = firstValue + " - " + secondValue + " = " + result;
            // fs.writeFile('/log.txt', content, err => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            // });
            break;
        case "multiplicacao":
            result = firstValue * secondValue;
            // const content = firstValue + " * " + secondValue + " = " + result;
            // fs.writeFile('/log.txt', content, err => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            // });
            break;
        default:
            result = firstValue / secondValue;
            // const content = firstValue + " / " + secondValue + " = " + result;
            // fs.writeFile('/log.txt', content, err => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }
            // });
            break;
    }
    document.getElementById('result').innerHTML = result;
}