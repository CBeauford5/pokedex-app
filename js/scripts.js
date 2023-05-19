// IIFE wrap
let pokemonRepository = (function () {

  // created a blank array and added Pokemon objects to it
  let pokemonList = [];
  pokemonList = [
    { name: 'Bulbasaur', height: '0.7 m', type: ['Grass', 'Poison'] },
    { name: 'Charmander', height: '0.6 m', type: 'Fire' },
    { name: 'Charizard', height: '1.7 m', type: ['Fire', 'Flying'] },
    { name: 'Squirtle', height: '0.5 m', type: 'Water' },
    { name: 'Arbok', height: '3.5 m', type: 'Poison' },
    { name: 'Pikachu', height: '0.4 m', type: 'Electric' },
    { name: 'Metapod', height: '0.7 m', type: 'Bug' },
    { name: 'Sandshrew', height: '0.6 m', type: 'Ground' },
    { name: 'Jigglypuff', height: '0.5 m', type: ['Fairy', 'Normal'] },
    { name: 'Primeape', height: '1 m', type: 'Fighting' }
  ];

  //function to add pokemon with object validation
  function add(pokemon) {
    if (typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'type' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("Not a valid Pokemon object");

    }
  }

  //function to return pokemon array 
  function getAll() {
    return pokemonList;
  }

  //object created to access functions outside of wrap
  return {
    add: add,
    getAll: getAll
  };
})();

// for loop that iterates over the objects in the array and prints them to the DOM
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (height: " + pokemon.height + ")");

  // conditional that searches for pokemon over 2 m in height
  if (pokemon.height > "2 m") {
    document.write(" - Wow that's big!");
  }
  document.write("<br><br>");
});