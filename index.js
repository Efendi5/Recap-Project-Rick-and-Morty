console.clear();
// import von card.js
import { createCharacterCard } from "./card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// states hinzugefügt durch card.js
// 1. für die Karte und 2. für den Container
const card = createCharacterCard(character);
cardContainer.append(card);

// Beispiel für character
const character = {
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  status: "Alive",
  type: "",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
};
