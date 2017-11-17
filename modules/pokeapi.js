import Pokemon from 'pokemon-images'
import param from 'jquery-param'

const cachios = require('cachios');

export default async (pagination) => {


    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?' + param(pagination));
    const pokemonList = response.data.results

    let list = [], newPokemons = []


    for (let result of pokemonList)
        list.push(getPokemon(result.url))


    const pokemons = await Promise.all(list)


    for (let pokemon of pokemons)
        newPokemons.push({
            ...pokemon,
            image: Pokemon.getSprite(pokemon.name)
        })



    return newPokemons


}


export const getPokemon = async (url) => {
    const response = await cachios.get(url, {ttl: 30})
    return response.data
}