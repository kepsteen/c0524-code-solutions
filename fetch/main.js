'use strict';
async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/blastoise');
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error: ', error);
  }
}
fetchPokemonData();
