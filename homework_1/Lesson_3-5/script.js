'use sctrict'

const button = document.getElementById('submit');
const resultForm = document.getElementById('resultform');

function func() {
    const num1 = document.getElementById('num1').value;
    const operator = document.getElementById('operator').value;
    const num2 = document.getElementById('num2').value;
    let result;

    if (num1 === "" || num1.trim() === "") {
        resultForm.innerText = "Первое число не указано";
        return console.log("Первое число не указано");
    }

if (num2 === "" || num2.trim() === "") {
resultForm.innerText = "Второе число не указано";
return console.log("Второе число не указано");

}

if (isNaN(num1) === true) {
    resultForm.innerText = "Неккоректный ввод числел";
    return console.log("Неккоректный ввод чисел");
}

if (operator === "") {

    resultForm.innerText = "Не введён знак";
    return console.log("Не введён знак");
}

switch (operator) {

case "":
    return console.log("Не введён знак");
    break;
case '+':
    result = Number(num1) + Number(num2);
    break;
case '-':
    result = Number(num1) - Number(num2);
    break;
case '/':
    result = Number(num1) / Number(num2);
    break;
case "*":
    result = Number(num1) * Number(num2);
    break;

default:
    return resultForm.innerText = 'Программа не поддерживает такую операцию';
}

if (isNaN(result)) {
    resultForm.innerText = 'Некорректный ввод чисел';
    return console.log('Некорректный ввод чисел');

}
if (result === - Infinity || result === Infinity) {
    resultForm.innerText = 'Операция некорректна';
    console.log('Операция некорректна');

} else {
    resultForm.innerText = result;
    console.log(result);
}

}












