// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);



// access HTml form elements using these methods
// document.getElementById('formElementId')
// document.querySelector('#formElementId')

// form elements = a container for different types of 
// input elements, such as: text fields, checkboxes, radio 
// buttons, submit buttons
// to retrieve value of a form control element
// HTML <input type="text" id="city" name="city">
// JS let city = document.querySelector('#city').value
