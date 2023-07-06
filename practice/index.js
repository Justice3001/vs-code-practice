fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then((data) => {
    const pokemonCount = data.results.length;
    const randomIndex = Math.floor(Math.random() * pokemonCount);
    const randomPokemon = data.results[randomIndex].name;
    console.log('Random Pokemon:', randomPokemon);
  })
  .catch((error) => {
    console.log('Houston, we have a problem...', error);
  });
