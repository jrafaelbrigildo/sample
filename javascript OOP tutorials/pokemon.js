document.addEventListener('DOMContentLoaded', async function () {
    fetchPokemon();
});

async function fetchPokemon() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const types = data.types.map(type => type.type.name);
        const imgElement = document.getElementById("pokemon-img");

        document.getElementById("pokemon-name").innerText = `Name: ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase()}`;
        
        document.getElementById('pokemon-type').innerText = `Type(s): ${types.join(', ')}`;
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}
