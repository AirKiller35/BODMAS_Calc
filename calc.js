var inputValueStr = document.getElementById("inputBox");
var outputValueStr = document.getElementById("outputBox");
 
console.log(inputValueStr+"b")
console.log(inputValueStr.textContent);

var num1 = 0, num2= 0, ans = 0;

// declarations of all numbers
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let doubleZero = document.getElementById("doubleZero");

// declarrations of all operations
let equalTo = document.getElementById("equalToBtn");
let AC = document.getElementById("allClear");
let C = document.getElementById("clear");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

//all the basic operation functions
function addOperation(num1, num2){
    return (num1 + num2);
}
function substractOperation(num1, num2){
    return (num1 - num2);
}
function multiplyOperation(num1, num2){
    return (num1 * num2);
}
function divideOperation(num1, num2){
    return (num1/num2);
}
function equalOperation(){
    outputValueStr.textContent = ans;
}
function allClearOperation(){
    inputValueStr.textContent = 0;
    outputValueStr.textContent = 0;
    num1 = 0;
    num2 = 0;
    ans = 0;
}
function clearOperation(){
    
}


// a = 0;
// this is just the inputing numbers only, there is no operations being performed as of now
// while(a = 0){
//     one.onclick = function(){
//         x *= 10;
//         x += 1;
//         inputValue.textContent = x;
//     }
// }