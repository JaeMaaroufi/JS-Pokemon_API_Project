const pidgeyid = document.getElementById("pidgey");
const bulbasaurid = document.getElementById("bulbasaur");
const caterpieid = document.getElementById("caterpie");
const beedrillid = document.getElementById("beedrill");
const squirtleid = document.getElementById("squirtle");

async function getPokemonDetails(name) {
  try {
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await respone.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

bulbasaurid.addEventListener("click", () => {
  window.location.href = `./details-list.html?name=bulbasaur`;
});

pidgeyid.addEventListener("click", () => {
  window.location.href = `./details-list.html?name=pidgey`;
});

caterpieid.addEventListener("click", () => {
  window.location.href = `./details-list.html?name=caterpie`;
});

beedrillid.addEventListener("click", () => {
  window.location.href = `./details-list.html?name=beedrill`;
});
squirtleid.addEventListener("click", () => {
  window.location.href = `./details-list.html?name=squirtle`;
});

const searchButoon = document.getElementById("nav-search-bar");
const searchInbut = document.getElementById("input-search");
const navBarAbout = document.getElementById("nav-bar-about");
const navBarHome = document.getElementById("nav-bar-home");
const pokemonSearch = document.getElementById("pokemon-search");

function searchAdd() {
  searchButoon.addEventListener("click", () => {
    if (searchInbut.style.display === "none") {
      searchInbut.style.display = "block";
      pokemonSearch.style.display = "block";
      navBarAbout.style.display = "none";
      navBarHome.style.display = "none";
      searchButoon.style.background="white"
      searchButoon.style.color="#465456"
    } else {
      searchInbut.style.display = "none";
      navBarAbout.style.display = "block";
      navBarHome.style.display = "block";
      pokemonSearch.style.display = "none";
      searchButoon.style.background="#465446"
      searchButoon.style.color="white"
    }
  });
}

searchAdd();

pokemonSearch.addEventListener("click",()=>{
  const inputSearch=searchInbut.value

  window.location.href = `./details-list.html?name=${inputSearch}`

})
