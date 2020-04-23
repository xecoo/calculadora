
function calculadora(operacao) {
let result = 0;
const firstValue = Number(document.getElementById('fvalue').value);
const secondValue = Number(document.getElementById('svalue').value);
    
    switch (operacao) {
        case "soma":
            result = (firstValue + secondValue);            
            break;
        case "subtracao":
            result = (firstValue - secondValue);
            break;
        case "multiplicacao":
            result = (firstValue * secondValue);
            break;
        default:
            result = (firstValue / secondValue);
            break;
    }
    document.getElementById('result').innerHTML = result;
}