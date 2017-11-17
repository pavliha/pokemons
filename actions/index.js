export const LOAD_POKE_API = 'LOAD_POKE_API';
export const CHANGE_POKEMON_PAGE = 'CHANGE_POKEMON_PAGE'

import generateTable from '../modules/pokeapi'

export function loadPokeApi(page) {
    return {
        type: LOAD_POKE_API,
        payload: generateTable({limit: 10, offset: 10 * page}),
    }
}


export function changePage(page) {
    return {
        type: CHANGE_POKEMON_PAGE,
        payload: page
    }
}