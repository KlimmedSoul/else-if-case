const firstNumber = 24
const secondNumber = 41
let result = 0
const operation = '*'

switch (operation) {
    case '+':
        result = firstNumber + secondNumber
        console.log(result)
        break;
    case '-':
        result = firstNumber - secondNumber
        console.log(result)
        break;
    case '*':
        result = firstNumber * secondNumber
        console.log(result)
        break;
    case '/':
        result = firstNumber / secondNumber
        console.log(result)
        break
    default:
        console.log('Неизвестная операция')
        break
}