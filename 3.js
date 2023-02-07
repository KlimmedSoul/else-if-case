const firstNumber = 785
const secondNumber = 543
const thirdNumber = 123
const fourthNumber = 312
if (!isNaN(firstNumber && secondNumber && thirdNumber && fourthNumber) && isFinite(firstNumber && secondNumber && thirdNumber && fourthNumber)) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber > fourthNumber) {
        console.log("Первое число является максимальным")
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber && secondNumber > fourthNumber) {
        console.log("Второе число является максимальным")
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber && thirdNumber > fourthNumber) {
        console.log("Третье число является максимальным")
    } else if (fourthNumber > firstNumber && fourthNumber > secondNumber && fourthNumber > thirdNumber) {
        console.log("Четвертое число является максимальным")
        }
    }
else {
    console.log('Вы ввели что-то не понятное')
}