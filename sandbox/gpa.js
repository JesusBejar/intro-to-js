
function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    // .value 

    const grade = document.querySelector("#grades").value;
    const gradeLetters = grade.split(",")
    const splitGradeLetters = gradeLetters.map((grade) =>trim().toUpperCase());
    console.log(splitGradeLetters)
    return splitGradeLetters;

  }
  
  function lookupGrade(grade) {

    let gradeTotal = 0;
    // converts the letter grade to it's GPA point value and returns it
    if (grade === "A") {
        gradeTotal = 4
    }
    else if(grade === "B") {
        gradeTotal = 3
    }
    else if(grade === "C") {
        gradeTotal= 2
    }
    else if(grade === "D") {
        gradeTotal = 1
    }
    return gradeTotal
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    const gradePoints = grades.map((grade) => lookupGrade(grade));

    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;

    return gpa.toFixed(2);
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    const grades = getGrades();
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
    
  }

  document.querySelector("submitButton").addEventListener("click", clickHandler);
