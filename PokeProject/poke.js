const pokemons = [
    {
        name : "charmander", 
        category : "Fire",
        height : "2 feet",
        weight : "19 pounds",
        weakness : "water",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a nesciunt optio fugit,quis iste exercitationem voluptates debitis ipsa aliquam?"
    }, {
        name : "squirtle", 
        category : "Water",
        height : "1 feet",
        weight : "20 pounds",
        weakness : "grass",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a nesciunt optio fugit,quis iste exercitationem voluptates debitis ipsa aliquam?"
    }, {
        name : "bulbasaur", 
        category : "Grass",
        height : "2 feet",
        weight : "15 pounds",
        weakness : "fire",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a nesciunt optio fugit,quis iste exercitationem voluptates debitis ipsa aliquam?"
    }
];
// S1 select the id or class and assign it to a variable
let section = document.querySelector(".section");
const filterButtons = document.querySelectorAll(".filter-btn");
let buttonContainer = document.querySelector(".button-container");
// this event listener activites when the window is opened!
window.addEventListener("DOMContentLoaded", function(){
    // console.log("yo momma fool")
    // the map method creates a new array populated with the results
    // of calling a provided functionon every element in the calling array
    DisplayPokemons(pokemons);

});
 
filterButtons.forEach(function (button) {
    button.addEventListener("click", function (e){
        // console.log(e.currentTarget.dataset.id);
        let category = e.currentTarget.dataset.id;
        let pokemonCategory = pokemons.filter(function (pokemon) {
        if (pokemon.category === category){
            return pokemon;
        }
    });
        // console.log(pokemonCategory);
        if (category === "all") {
            DisplayPokemons(pokemons);
        }
        else {
            DisplayPokemons(pokemonCategory);
        }
    });
});

function DisplayPokemons() {
    let displayPokemon = pokemons.map(function (characteristic){
        // join them in one string 
        return `    
        <article id="pokemon">
            <img src="" alt="">
            <h2 class="name">${characteristic.name}</h2>
            <h4 class="category">${characteristic.category}</h4>
            <h4 class="height">${characteristic.height}</h4>
            <h4 class="weight">${characteristic.weight}</h4>
            <h4 class="weakness">${characteristic.weakness}</h4>
            <p class="description">
            ${characteristic.description}
            </p>
            </article>`;
});
        
    displayPokemon = displayPokemon.join("");
    // console.log(displayPokemon);
    section.innerHTML = displayPokemon;
}