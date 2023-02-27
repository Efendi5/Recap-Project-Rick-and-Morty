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
export let searchQuery = "";

// Tasks done by Alina:

// 1. Import Efendis createCharacterCard function

import { createCharacterCard } from "./components/card.js";

// 2. Function to fetch the API-Data and add it as cards to cardContainer

/*(Inside of the index.js create a function called fetchCharacters. 
Use your knowledge about fetching to get the first 20 characters from the API. 
You can find the correct API endpoint in the docs.)*/

/*(After successfully fetching the character data, use array methods 
  to create an HTML card for each character and append it to the cardContainer. 
  Make sure that the cardContainer is emptied every time new characters are fetched 
  (HINT: you can use innerHTML = '' for that))*/

async function fetchCharacters(currentpage) {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currentpage}`,
      { method: "GET" }
    );
    if (!response.ok) {
      console.log("Bad response");
    } else {
      const characterData = await response.json();
      const filteredCharacters = characterData.filter(
        (character) => character.id <= 20
      );
      filteredCharacters.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
      page++;
    }
  } catch (error) {
    console.error("An error occured");
  }
}

// 3. Call the function inside the index.js. Now you should see 20 cards in your app.*/

fetchCharacters();
