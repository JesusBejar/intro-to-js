/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add (number1, number2) {
// Step 2: In the function, return the sum of the parameters number1 and number2
return number1 + number2
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers 
// that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them 
// to the add function
// how do i pass them to the add function?
function addNumbers() {

    var nameValue1 = document.querySelector("#addend1").value;
    var nameValue2 = document.querySelector("#addend2").value;
    // Number (attributes); turns strings into ints
    let sum = add(Number(nameValue1), Number(nameValue2));
    document.querySelector("#sum").value = sum;
    console.log(sum);
    return sum
}

// var = oldie but goldie
// let = declares varible and lets you change it later
// const = declares varible and doesn't let you change it later

// Step 4: Assign the return value to an HTML form element with an ID of sum
// how do i do this?
// call function and assign to variable
let sumVarible = addNumbers();
console.log(sumVarible);
document.querySelector("#sum").value = sumVarible;

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

let button = document.querySelector("#addNumbers");

// referenced document attribute.addEventListener("click", functionName);
button.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract 
// and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, 
// difference and subtractNumbers
function subtract (number1, number2) {
    return number1 - number2
}

function subtractNumbers () {
        var minuend = document.querySelector("#minuend").value;
        var subtrahend = document.querySelector("#subtrahend").value;
        // Number (attributes); turns strings into ints
        let result = subtract(Number(minuend), Number(subtrahend));
        document.querySelector("#difference").value = result;
        console.log(result);
        return result
}
let button2 = document.querySelector("#subtractNumbers");

button2.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply (number1, number2) {
    return number1 * number2
}

const multiplyNumbers = () => {
    var factor1 = document.querySelector("#factor1").value;
    var factor2 = document.querySelector("#factor2").value;
    // Number (attributes); turns strings into ints
    let result = multiply(Number(factor1), Number(factor2));
    document.querySelector("#product").value = result;
    console.log(result);
    return result
}
let button3 = document.querySelector("#multiplyNumbers");

button3.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide (number1, number2) {
    return number1 / number2
}
const divideNumbers = () => {
    var dividend = document.querySelector("#dividend").value;
    var divisor = document.querySelector("#divisor").value;
    // Number (attributes); turns strings into ints
    let result = divide(Number(dividend), Number(divisor));
    document.querySelector("#quotient").value = result;
    console.log(result);
    return result
}
let button4 = document.querySelector("#divideNumbers");

button4.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let newDate = Date.now()

let anotherDate = new Date(newDate)
// date should show in the counsel of devtools
console.log(anotherDate);

// Step 2: Declare a variable to hold the current year

let yearDate = anotherDate.getFullYear();
console.log(yearDate);

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

// .value = for input for elements
// .textContent = for non form elements
document.querySelector("#year").textContent = yearDate;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arrayVariable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = arrayVariable;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = arrayVariable.filter(number => number % 2 == 1);
document.querySelector("#odds").textContent = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = arrayVariable.filter(number => number % 2 == 0);
document.querySelector("#evens").textContent = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue =  0;
let arraySum = arrayVariable.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

document.querySelector("#sumOfArray").textContent = arraySum
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

let mapArray = arrayVariable.map(x => x * 2);
document.querySelector("#multiplied").textContent = mapArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let multipliedSumArray = mapArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
document.querySelector("#sumOfMultiplied").textContent = multipliedSumArray;