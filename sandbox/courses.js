// courses.js
// the object literal below contains :
// a course name, course num and a course section

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    // below is a section property
    // the section property is an array
    section: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}],
    // methods are functions stored as object properties

    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      },
      dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled--;
          renderSections(this.sections);
        }
      },
    };
    // below is a valid combination of enrollStudents and dropStudent methods
    // changeEnrollment: function (sectionNum, add = true) {
    //     // find the right section...Array.findIndex will work here
    //     const sectionIndex = this.sections.findIndex(
    //       (section) => section.sectionNum == sectionNum
    //     );
    //     if (sectionIndex >= 0) {
    //       if (add) {
    //         this.sections[sectionIndex].enrolled++;
    //       } else {
    //         this.sections[sectionIndex].enrolled--;
    //       }
    //       renderSections(this.sections);
    //     }
    //   }

function SetCourseInfo (course) {
    // below can pass the name and num of course into course name & course code id
    // note the parameters of the function
    const courseName = document.querySelector("#courseName").textContent = course.name;
    const courseCode = document.querySelector("#courseCode").textContent = course.code;
    // courseName.textContent = course.name;
    // courseCode.textContent = course.code;
}
// below is how you output sections into the table #sections
// rendering refers to the output in the browser
// this function will replace the html browser output with the array in the aCourse array above
function renderSections (sections) {
    const html = sections.map(
    (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
    }

// i assume these are function calls 
setCourseInfo(aCourse);
renderSections(aCourse.sections);

// look inside of the current object for a property called sections
this.sections;

    

