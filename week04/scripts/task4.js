/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// use {} instead of []
let myself = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
name : "Israel Bejar", 

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
photo : "images/pic.JPG",

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
favoriteFoods : ["taquitos", "tofu", "pistachios", "spinach", "jarritos"],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
hobbies : ["serving in the church", "speaking spanish", "coding things"],

// Step 6: Add another property named placesLived with a value of an empty array
placesLived : []

};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// push method pushes things to the end of the array
myself.placesLived.push({
    place : "Georgia",
    length : "8 years",
}, 
{
    place : "South Carolina",
    length : "3 years",
},
{
    place : "SA, Texas",
    length : "1 year",
},
{
    place : "Colorado ",
    length : "3 years",
},
{
    place : "South Carolina",
    length : "3 years",
}

)

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myself.name
// do you always need the semi-colon at the end of a statement?? ; "technically no, but best practice is yes" - Rachel

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = myself.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = myself.photo
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for (let i = 0; i < myself.favoriteFoods.length; i++) {
    let liElement = document.createElement("li");
    console.log(liElement);
    let favFoods = document.querySelector("#favorite-foods");
    // console.log(myself.favoriteFoods[i])
    liElement.innerHTML = myself.favoriteFoods[i]
    favFoods.append(liElement);
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
for (let i = 0; i < myself.hobbies.length; i++) {
    let liElement = document.createElement("li");
    console.log(liElement);
    let favFoods = document.querySelector("#hobbies");
    // console.log(myself.favoriteFoods[i])
    liElement.innerHTML = myself.hobbies[i]
    favFoods.append(liElement);
}
// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
console.log(myself.placesLived.length)
myself.placesLived.forEach ((place) => {
    let dt = document.createElement("dt")
    dt.innerHTML = place.place
    document.querySelector("#places-lived").append(dt)
    console.log(place.place)
});
myself.placesLived.forEach ((place) => {
    let dd = document.createElement("dd")
    dd.innerHTML = place.length
    document.querySelector("#places-lived").append(dd)
});
// for (let i = 0; i > myself.placesLived.length; i++) {
    // let dt = document.createElement("dt")
    // let dd = document.createElement("dd")
    // console.log(myself)

    // dt.innerHTML = myself.placesLived[i].place
    // dd.innerHTML = myself.placesLived[i].length
    // document.querySelector("#places-lived").append(dt)
    // document.querySelector("#places-lived").append(dd)
    // console.log(dt)
    // console.log(dd)
// }


// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived


