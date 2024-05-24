alert("Time to calculate!")

let firstNumber = prompt("Enter the first number:")
let secondNumber = prompt("Enter the second number:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

if (firstNumber != secondNumber){
    alert('The numbers entered are different!')
} else{
    alert('The numbers entered are the same!')
}

let sum = firstNumber + secondNumber

let sub = firstNumber - secondNumber

let multi = firstNumber * secondNumber

let div = (firstNumber / secondNumber).toFixed(2)

let restDiv = firstNumber % secondNumber



alert('Sum: ' + sum)

if (sum % 2 == 0){
    alert('The sum of the two numbers is even!')
} else{
    alert('The sum of the two numbers is odd!')
}


alert('Subtraction: ' + sub)

alert('Multiplication: ' + multi)

alert('Division: ' + div)

alert('Rest of Division: ' + restDiv)
