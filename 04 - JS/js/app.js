const btn = document.querySelector("#search");
const url = "https://pokeapi.co/api/v2/pokemon/";

//Search pokemon
const getName = () => {
  let input = document.querySelector("#pokeInput");
  return input.value;
};

const fetchPokemon = () => {
  document.querySelector("#pokemon-moves").innerHTML = "";
  let pokemon = getName().toLowerCase();
  fetch(url + pokemon)
    .then((res) => {
      if (res.status !== 200) {
        document.querySelector("#pokemon-image").src = "/src/img/MissingNo.png";
        document.querySelector("#pokemon-name").innerHTML = "MissingNo.";
        document.querySelector("#hp").innerHTML = "";
        document.querySelector("#stat-attack").innerHTML = "";
        document.querySelector("#stat-defense").innerHTML = "";
        document.querySelector("#stat-speed").innerHTML = "";
        document.querySelector("#pokemon-types").innerHTML = "";
        console.log("incorrect data");
      }
      return res.json();
    })
    .then((data) => {
      document.querySelector("#hp").innerHTML = data.stats[0].base_stat;
      document.querySelector("#pokemon-image").src = data.sprites.front_default;
      document.querySelector("#pokemon-name").innerHTML =
        data.name.toUpperCase();
      document.querySelector("#stat-attack").innerHTML =
        data.stats[1].base_stat;
      document.querySelector("#stat-defense").innerHTML =
        data.stats[2].base_stat;
      document.querySelector("#stat-speed").innerHTML = data.stats[5].base_stat;

      let eachType = [];
      for (let i = 0; i < data.types.length; i++) {
        eachType.push(typeColor[data.types[i]["type"]["name"]]);
      }
      console.log("each", typeColor[eachType]);
      const themeColor = typeColor[data.types[0].type.name]; //set themecolor based on pokemon type
      let nameType = [];
      for (let i = 0; i < data.types.length; i++) {
        nameType.push(data.types[i]["type"]["name"]);
      }
      getTypes(nameType);
      styleCard(eachType);
      getMoves(data.moves);
    })
    .catch((err) => console.log(err));
};

const getTypes = (types) => {
  console.log("types", types);
  let selectedType = document.querySelector("#pokemon-types");
  while (selectedType.firstChild) {
    selectedType.firstChild.remove();
  }

  types.forEach((item) => {
    let span = document.createElement("span");
    span.textContent = item.toUpperCase();
    span.classList.add("type-box");
    span.classList.add(item);
    selectedType.append(span);
  });
};

const getMoves = (moves) => {
  moves.forEach((item) => {
    let span = document.createElement("div");
    span.textContent = item.move.name;
    document.querySelector("#pokemon-moves").append(span);
  });
};

btn.addEventListener("click", fetchPokemon);

//Pokedex List
const pkmCount = 898;
let pokedex = {};

window.onload = async () => {
  for (let i = 1; i <= pkmCount; i++) {
    await loadList(i);
    let pokeList = document.createElement("div");
    pokeList.id = i;
    pokeList.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
    pokeList.classList.add("pokemon-name");
    pokeList.addEventListener("click", seePkmInfo);
    document.getElementById("list").append(pokeList);
  }
};

const loadList = async (num) => {
  let getPkm = url + num.toString();
  let res = await fetch(getPkm);
  let pkm = await res.json();
  let pkmHp = pkm["stats"][0]["base_stat"];
  let pkmName = pkm["name"];
  let pkmType = pkm["types"];
  let pkmImg = pkm["sprites"]["front_default"];
  let pkmAtk = pkm["stats"][1]["base_stat"];
  let pkmDef = pkm["stats"][2]["base_stat"];
  let pkmSpd = pkm["stats"][5]["base_stat"];
  pokedex[num] = {
    hp: pkmHp,
    name: pkmName,
    img: pkmImg,
    types: pkmType,
    atk: pkmAtk,
    def: pkmDef,
    spd: pkmSpd,
  };
};

//Load selected Pokemon data from Pokedex list
function seePkmInfo() {
  document.querySelector("#hp").innerHTML = pokedex[this.id]["hp"];
  document.querySelector("#pokemon-image").src = pokedex[this.id]["img"];
  document.querySelector("#pokemon-name").innerHTML =
    pokedex[this.id]["name"].toUpperCase();
  document.querySelector("#stat-attack").innerHTML = pokedex[this.id]["atk"];
  document.querySelector("#stat-defense").innerHTML = pokedex[this.id]["def"];
  document.querySelector("#stat-speed").innerHTML = pokedex[this.id]["spd"];

  let typesDiv = document.querySelector("#pokemon-types");
  while (typesDiv.firstChild) {
    typesDiv.firstChild.remove();
  }

  let types = pokedex[this.id]["types"];
  for (let i = 0; i < types.length; i++) {
    let type = document.createElement("span");
    type.innerText = types[i]["type"]["name"].toUpperCase();
    type.classList.add("type-box");
    type.classList.add(types[i]["type"]["name"]);
    // console.log(types);
    typesDiv.append(type);
  }
  //set themecolor based on pokemon type
  let eachType = [];
  for (let i = 0; i < types.length; i++) {
    eachType.push(typeColor[types[i]["type"]["name"]]);
  }

  const themeColor = typeColor[types[0].type.name];
  // console.log(themeColor);
  styleCard(eachType);
}

// color per type
const typeColor = {
  bug: "#26de81",
  dark: "#26142a",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#ff0069",
  fighting: "#30336b",
  fire: "#D22B2B",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  steel: "#71797E",
  water: "#0190ff",
};

const styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #fff 36%)`;
  let cardColor = card.querySelectorAll(".pokemon-types span");
  for (let i = 0; i < cardColor.length; i++) {
    cardColor[i].style.backgroundColor = color[i];
    console.log(cardColor);
  }
  // card.querySelectorAll(".pokemon-types span").forEach((typeColor) => {
  //   typeColor.style.backgroundColor = color[typeColor];
  // });
};
