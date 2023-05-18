//created a blank array and added Pokemon objects to it
let pokemonList = [];
pokemonList = [
  { name: 'Bulbasaur', height: '0.7 m', type: ['Grass', 'Poison'] },
  { name: 'Charmander', height: '0.6 m', type: 'Fire' },
  { name: 'Charizard', height: '1.7 m', type: ['Fire', 'Flying'] },
  { name: 'Squirtle', height: '0.5 m', type: 'Water' },
  { name: 'Arbok', height: '3.5 m', type: 'Poison'},
  { name: 'Pikachu', height: '0.4 m', type: 'Electric'},
  { name: 'Metapod', height: '0.7 m', type: 'Bug'},
  { name: 'Sandshrew', height: '0.6 m', type: 'Ground'},
  { name: 'Jigglypuff', height: '0.5 m', type: ['Fairy', 'Normal']},
  { name: 'Primeape', height: '1 m', type: 'Fighting'}
];

//for loop that iterates over the objects in the array and prints them to the DOM
for (let i=0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")")
  
  //conditional that searches for pokemon over 2 m in height
  if (pokemonList[i].height > "2 m") {
    document.write(" - Wow that's big!")
  }
  document.write("<br><br>")
}