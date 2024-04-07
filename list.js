

async function getPokemonList() {
  try {
    const respones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await respones.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

const pokemonsContainer = document.getElementById("characters-card");
const pokemonsImg = document.getElementById("characters-cards-img");
// const pokemonName = document.getElementById("characters-card-name");
const pokemonP = document.getElementById("characters-card-p");

async function displayPokemon() {
  const pokemons = await getPokemonList();
  pokemons.forEach((pokemon) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const pokemonName = document.createElement("p");
    const pokemonType = document.createElement("p");
    pokemonType.className = "card-Type";
    pokemonName.className = "card-p";
    pokemonName.textContent = pokemon.name;

    pokemonsContainer.appendChild(cardContainer);
    cardContainer.appendChild(pokemonName);

    cardContainer.addEventListener("click", () => {
      window.location.href = `./details-list.html?name=${pokemon.name}`;
    });
  });
}

displayPokemon();
