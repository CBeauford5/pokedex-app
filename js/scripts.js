// IIFE wrap
let pokemonRepository = (function () {

  // created a blank array and added Pokemon objects to it
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  //function to add pokemon with object validation
  function add(pokemon) {
    if (typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("Not a valid Pokemon object");

    }
  }

  //function to return pokemon array 
  function getAll() {
    return pokemonList;
  }

  //function to add the Pokemons as buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function (event) {
      showDetails(pokemon)
    });
  }

  // function to load list from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // function to load the details of Pokemon from the API
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = [];
        for (let i = 0; i < details.types.length; i++) {
          item.types.push(' ' + details.types[i].type.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // function to display modal after loading details
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //function that contains the details to display in the modal and a function to hide the modal with eventListeners
  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerText = pokemon.name;

    let pokemonImage = document.querySelector('.pokemon-image');
    pokemonImage.src = pokemon.imageUrl;

    let pokemonHeight = document.querySelector('.pokemon-height');
    pokemonHeight.innerText = 'Height: ' + pokemon.height;

    let pokemonTypes = document.querySelector('.pokemon-types');
    pokemonTypes.innerText = 'Types: ' + pokemon.types;


  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();



// for loop that iterates over the objects in the array and adds Pokemon name as a button
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});