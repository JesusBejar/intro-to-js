/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// let currentDate = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = currentDate.getDay();

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let messageDisplayed = "";

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

if (
  dayOfWeek == 1 ||
  dayOfWeek == 2 ||
  dayOfWeek == 3 ||
  dayOfWeek == 4 ||
  dayOfWeek == 5
) {
  messageDisplayed = "Hang in there";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  messageDisplayed = "Woohoo! It's the weekend";
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let AnotherMessage = "";
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string
// (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 1:
    AnotherMessage = "Monday";
    break;
  case 2:
    AnotherMessage = "Tuesday";
    break;
  case 3:
    AnotherMessage = "Wednesday";
    break;
  case 4:
    AnotherMessage = "Thursday";
    break;
  case 5:
    AnotherMessage = "Friday";
    break;
  case 6:
    AnotherMessage = "Saturday";
    break;
  case 7:
    AnotherMessage = "Sunday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
let message1 = document.querySelector("#message1");
message1.innerHTML = messageDisplayed;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
let message2 = document.querySelector("#message2");
message2.innerHTML = AnotherMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeArray = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and
// does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and
// the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(templeArray) {
  // remember that .forEach is camel case bro
  templeArray.forEach((temple) => {
    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.innerHTML = temple.templeName;

    let anotherh4 = document.createElement("h4");
    anotherh4.innerHTML = temple.location;

    let h3 = document.createElement("h3");
    h3.innerHTML = temple.dedicated;

    // below is confusion???
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    article.append(h3);
    article.append(h4);
    article.append(anotherh4);
    article.append(img);

    let templeElement = document.querySelector("#temples");
    templeElement.append(article);
  });
}
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL:
// 'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
// Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable
// you declared earlier (Step 1).
// Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make
// sure it works correctly.
let url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

async function getTemples(url) {
  const fetchResponse = await fetch(url);
  if (fetchResponse.ok) {
    const data = await fetchResponse.json();

    // templeArray.push(data);
    console.log(data);

    output(data);
  }
}

getTemples(url);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
  let articles = document.querySelector("#temples");

  articles.innerHTML = "";
  // articles.forEach (article => {
  //     article.innerHTML = "";
  // })
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// ask Brother Lundell about below function
function sortBy() {
  reset();

  let sortByV = document.querySelector("#sortBy").value;

  // let sortedTempleList = templeArray.sortbyElement;
  // console.log(sortedTempleList);

  // templeArray.sort((a, b) => (a.sortbyV > b.sortbyV ? 1 : -1));
  // output(templeArray);

  if (sortByV === "templeNameAscending") {
    templeArray.sort((temple1, temple2) => {
      if (temple1.templeName > temple2.templeName) {
        return 1;
      } else if (temple1.templeName < temple2.templeName) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(templeArray);
  } else if (sortByV === "templeNameDescending") {
    templeArray.sort((temple1, temple2) => {
      if (temple1.templeName > temple2.templeName) {
        return -1;
      } else if (temple1.templeName < temple2.templeName) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(templeArray);
  }

  // Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
  let sortById = document.querySelector("#sortBy");
  sortById.addEventListener("change", sortBy);
  output(templeArray);
}
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
