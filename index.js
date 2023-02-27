console.clear();
// import von card.js
import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
export const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = 1;
export let page = 1;
export let searchQuery = "https://rickandmortyapi.com/api/character/";

async function fetchCharacters(url) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(`${url}`, { method: "GET" });
    if (!response.ok) {
      console.log("Bad response");
    } else {
      const characterData = await response.json();

      console.log(characterData);
      characterData.results.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
      page++;
    }
  } catch (error) {
    console.error("An error occured");
  }
}

fetchCharacters(searchQuery);
