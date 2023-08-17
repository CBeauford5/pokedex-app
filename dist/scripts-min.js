let pokemonRepository=(function(){let pokemonList=[];let apiUrl='https://pokeapi.co/api/v2/pokemon/?limit=150';function add(pokemon){if(typeof pokemon==='object'&&'name'in pokemon&&'detailsUrl'in pokemon){pokemonList.push(pokemon)}else{console.log("Not a valid Pokemon object")}}function getAll(){return pokemonList}function addListItem(pokemon){let pokemonList=document.querySelector('.pokemon-list');let listItem=document.createElement('li');listItem.classList.add('list-group-item');let button=document.createElement('button');button.innerText=pokemon.name;button.classList.add('btn');button.setAttribute('data-toggle','modal');button.setAttribute('data-target','#exampleModal');listItem.appendChild(button);pokemonList.appendChild(listItem);button.addEventListener('click',function(event){showDetails(pokemon)})}function loadList(){return fetch(apiUrl).then(function(response){return response.json()}).then(function(json){json.results.forEach(function(item){let pokemon={name:item.name,detailsUrl:item.url};add(pokemon);console.log(pokemon)})}).catch(function(e){console.error(e)})}function loadDetails(item){let url=item.detailsUrl;return fetch(url).then(function(response){return response.json()}).then(function(details){item.imageUrl=details.sprites.front_default;item.height=details.height;item.types=[];for(let i=0;i<details.types.length;i+=1){item.types.push(' '+details.types[i].type.name)}}).catch(function(e){console.error(e)})}function showDetails(pokemon){loadDetails(pokemon).then(function(){showModal(pokemon)})}function showModal(pokemon){let modalTitle=document.querySelector('.modal-title');modalTitle.innerText=pokemon.name;let pokemonImage=document.querySelector('.pokemon-image');pokemonImage.src=pokemon.imageUrl;let pokemonHeight=document.querySelector('.pokemon-height');pokemonHeight.innerText='Height: '+pokemon.height;let pokemonTypes=document.querySelector('.pokemon-types');pokemonTypes.innerText='Types: '+pokemon.types}return{add:add,getAll:getAll,addListItem:addListItem,loadList:loadList,loadDetails:loadDetails,showDetails:showDetails,showModal:showModal}})();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(pokemon){pokemonRepository.addListItem(pokemon)})});document.getElementById("searchBar").addEventListener("keyup",(e)=>{let t=e.target.value.toLowerCase(),o=pokemonRepository.getAll().filter((e)=>e.name.toLowerCase().includes(t));(document.querySelector(".pokemon-list").innerHTML=""),o.forEach((e)=>{pokemonRepository.addListItem(e)})});