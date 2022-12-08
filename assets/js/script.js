console.log("hello");

var input    = document.getElementById('.input');
console.log(input);
var number   = document.getElementById('.numbers div');
console.log(number);
var operator = document.getElementById('.operators');
console.log(operator);
var result   = document.getElementById('#result');
console.log(result);
var clear    = document.getElementById('#clear');
var resultDisplayed = false;

for(var i = 0 ; i < number.length; i++){
    number[i].addEventListener("click" , function(e){
        var currentString = input.innerHTML;
        console.log(currentString);
        var lastChar = currentString[currentString.length -1]
        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }
    })

}