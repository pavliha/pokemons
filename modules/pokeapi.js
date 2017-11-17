import Pokemon from 'pokemon-images'
import param from 'jquery-param'

const cachios = require('cachios');

export default async (pagination) => {


    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?' + param(pagination));
    const pokemonList = response.data.results

    let newPokemons = []

    for (let pokemon of pokemonList)
        newPokemons.push({
            ...pokemon,
            image: Pokemon.getSprite(pokemon.name),
            details: getPokemonDetails(pokemon.url)
        });

    response.data.pokemons = newPokemons

    return response.data
}


export const getPokemonDetails = async (url) => {
    const response = await cachios.get(url, {ttl: 30})
    return response.data
}