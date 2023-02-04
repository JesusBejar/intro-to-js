const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

var newImg = document.createElement("div");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Cool animals img");
customElements.body.appendChild(newImage)

const newSection = document.createElement();
newH2 = document.createElement('h2');
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2);
const NewP = document.createElement("p");
newH2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newP);

document.body.appendChild(newSection);