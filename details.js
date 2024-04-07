const pokemonName = document.getElementById("main-title");
const types = document.getElementById("type");
const height = document.getElementById("height");
const ability = document.getElementById("abilities");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defense");
const speed = document.getElementById("speed");
const specials = document.getElementById("specials");
const specialAttack = document.getElementById("atk");
const specialDefence = document.getElementById("def");
const imgSprite = document.getElementById("main-img");
async function getPokemonDetails(name) {
  try {
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await respone.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayPokemonDetails() {
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get("name");
  const data = await getPokemonDetails(name);
  pokemonName.textContent = data.name;
  height.textContent += data.height;
  imgSprite.src = data.sprites.front_default;
  data.types.forEach((type, index) => {
    if (index == 0) {
      types.textContent += type.type.name;
    } else {
      types.textContent += " | " + type.type.name;
    }
  });

  // data.abilities.forEach((abilities, index) => {
  //   if (index == 0) {
  //     ability.innerHTML+=`<div> ${abilities.ability.name}</div>`
  //   } else {
  //     ability.innerHTML+=`<div> ${abilities.ability.name} </div> `
  //   }
  // });
  data.stats.forEach((stat) => {
    hp.innerHTML += `<div>${stat.stat.name} ${stat.base_stat}</div>`;
  })
}
displayPokemonDetails();
