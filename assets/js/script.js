console.log("hello");

var input = document.getElementById('input');
console.log(input);
//console.log(input.innerHTML);
var number   = document.querySelectorAll('.numbers div');
console.log(number);
var operator = document.querySelectorAll('.operators div');
console.log(operator);
var result   = document.getElementById('result');
console.log(result);
var clear    = document.getElementById('#clear');
var resultDisplayed = false;

for(var i = 0 ; i < number.length; i++){
    number[i].addEventListener("click" , function(e){
        //var currentString = input.innerHTML;
        var currentString = input.value;
        console.log(currentString);
        var lastChar = currentString[currentString.length -1]
        console.log("last"+lastChar);
        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        } else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "+"){
             // if result is currently displayed and user pressed an operator
            // we need to keep on adding to the string for next operation
            resultDisplayed === false;
            input.innerHTML += e.target.innerHTML;
        } else {
             // if result is currently displayed and user pressed a number
            // we need clear the input string and add the new input to start the new opration
            resultDisplayed === false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// adding click handlers to number buttons
for(var i = 0 ; i < operator.length; i++) {
    operator[i].addEventListener("click" , function(e){
        //storing current input string and itd last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        //if last character entered is an operator, replace it with the currently pressed one
        if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar ==="+"){
            var newString = currentString.substring(0 , currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            // if first key pressed is an operator, don't do anything
            console.log("enter a number first");
        } else {
            // else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//on click of 'equal' button
result.addEventListener("click" , function(){
    //this is the string that we will be processing eg -10+26+33-56*34/23
    var inputString = input.innerHTML;
    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
    var numbers = inputString.split(/\+|\-|\*|\//g);
    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
    // first we replace all the numbers and dot with empty string and then split
    var operators = inputString.replace(/[0-9]|\./g,"").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("--------------");


})