// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
  // get element with js querySelector
  let variable = document.querySelector("#output");
  results = data;
  // made elements and added info using template literal strings
  // stored in the html variable

  const html = `<h2>${data.name}</h2>
  <img src="${data.sprites.front_default}" alt="Image of ${data.name}">`;

  // inserting html into variable #output element using innerHTML
  variable.innerHTML = html;
  console.log("first: ", results);
}
// create the element
let ul = document.createElement("ul");
ul.setAttribute("id", "outputList");
// let body = document.querySelector("body");
// console.log(body);
document.body.appendChild(ul);

async function getPokemonList (url) {

  const fetchrequest = await fetch(url);

  if (fetchrequest.ok) {

    const data = await fetchrequest.json();

    doStuffList(data)
  }
}

function doStuffList (data) {
  console.log(data);
  let outputList = document.querySelector("#outputList");
  let pokeList = data.results;

  pokeList.forEach((currentItem) => {
    
    const html = `<li>${currentItem.name}</li>`;
    // const html = `<li>${pokeList.name}</li>`;

    outputList.innerHTML += html; 

  });
}

getPokemon(url);

getPokemonList(urlList);