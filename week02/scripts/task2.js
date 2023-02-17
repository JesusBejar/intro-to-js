/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const nameVariable = "Jesus Bejar";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

let name = document.querySelector("#name").innerHTML = nameVariable;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file

document.querySelector("#year").innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let guapoPic = "images/MePic.JPG"; 
console.log(guapoPic)

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

let img = document.querySelector("#photo");
img.setAttribute("src", guapoPic);
console.log(img)

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let favfoods = ["tacos", "tofu", "pistachios"];
console.log(favfoods)

// Step 2: place the values of the favorite foods variable into the HTML file
let foods = document.querySelector("#foods");

favfoods.forEach(foodName => {
    let p = document.createElement("p")
    p.textContent = foodName
    foods.append(p)
});

// Step 3: declare and instantiate a variable to hold another favorite food

let anotherFood = "beans";

// Step 4: add the variable holding another favorite food to the favorite food array

favfoods.push(anotherFood);

// Step 5: repeat Step 2
foods.innerHTML = "" ;
favfoods.forEach(foodName => {
    let p = document.createElement("p")
    p.textContent = foodName
    foods.append(p)
});

// Step 6: remove the first element in the favorite foods array

// shift method removes first element of an array and rearanges the array
favfoods.shift();

// Step 7: repeat Step 2
foods.innerHTML = "" ;
favfoods.forEach(foodName => {
    let p = document.createElement("p")
    p.textContent = foodName
    foods.append(p)
});

// Step 8: remove the last element in the favorite foods array

// pop method removes last element of an array and rearanges the array
favfoods.pop();

// Step 7: repeat Step 2
foods.innerHTML = "" ;
favfoods.forEach(foodName => {
    let p = document.createElement("p")
    p.textContent = foodName
    foods.append(p)
});



