/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const nameVariable = "Jesus Bejar";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector("#name").innerHTML = nameVariable;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = 2023

// Step 4: place the value of the current year variable into the HTML file

document.querySelector("#year").innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture

const guapoPic = document.createElement("img");

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

guapoPic.setAttribute("src", "https://placeimg.com/200/200/animals");
guapoPic.setAttribute("alt", "guapo");
document.body.appendChild(guapoPic);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

// const foods = ["tacos", "tofu", "pistachios"];

// Step 2: place the values of the favorite foods variable into the HTML file
const foods = document.createElement("food")
foods.innerText = ["tacos", "tofu", "pistachios"];
document.body.appendChild(foods);

document.querySelector("#food").textContent = foods
document.querySelector("#food").textContent = food1, food2, food3;
document.querySelector("#food").textContent = "tacos, tofu, pistachios";

// Step 3: declare and instantiate a variable to hold another favorite food

const anotherFood = "beans";

// Step 4: add the variable holding another favorite food to the favorite food array

foods.push(anotherFood);

// Step 5: repeat Step 2

document.querySelector("#food").textContent = foods;

// Step 6: remove the first element in the favorite foods array

// shift method removes first element of an array and rearanges the array
foods.shift();

// Step 7: repeat Step 2

document.querySelector("#food").textContent = foods;

// Step 8: remove the last element in the favorite foods array

// pop method removes last element of an array and rearanges the array
foods.pop();

// Step 7: repeat Step 2

document.querySelector("#food").textContent = foods;



