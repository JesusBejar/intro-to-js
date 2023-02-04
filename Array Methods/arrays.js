// MAP 1
// use const instead of let
const my_array = ["one", "two", "three"];

const stepsHtml = my_array.map(function (step) {
    return `<li> ${step}<li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();

// questions :
// how do i debug??
// how do i know if my code is correct or not?


// MAP 2
const letterArray = ["A", "B", "A"];
// should return 4, 3, 4

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A"){
        points = 4;}
    else if (grade === "B"){
        points = 3;}
    return points;
}
// map returns a new array and does NOT modify the original array
const gpaPoints = grades.map(convertGradeToPoints);

// REDUCE 
// const gpaPoints = grades.reduce(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item){
    return total + item
});
const gpa = pointsTotal / gpaPoints.length;

// FILTER
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const newFruits = fruits.filter(fruit => fruit.length > 6);
// arrow function, what is it?
console.log(newFruits)

// INDEXOF
const nums = [12, 34, 21, 54];
const luckNumber = 19
let luckyIndex = nums.indexOf(luckNumber, 3);
