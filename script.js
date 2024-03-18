alert("Hora do cálculo!")

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

if (firstNumber != secondNumber){
    alert('Os números inseridos são diferentes')
} else{
    alert('Os números inseridos são iguais')
}

let sum = firstNumber + secondNumber

let sub = firstNumber - secondNumber

let multi = firstNumber * secondNumber

let div = (firstNumber / secondNumber).toFixed(2)

let restDiv = firstNumber % secondNumber



alert('Soma: ' + sum)

if (sum % 2 == 0){
    alert('A soma dos dois números é par')
} else{
    alert('A soma dos dois números é ímpar')
}


alert('Subtração: ' + sub)

alert('Multiplicação: ' + multi)

alert('Divisão: ' + div)

alert('Resto da divisão: ' + restDiv)
