import {CHANGE_POKEMON_PAGE, LOAD_POKE_API} from "../actions/index";

const initialState = {
    pokemons: [],
    activePage: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POKE_API + "_FULFILLED":
            return {
                ...state,
                count: action.payload.count,
                pokemons: action.payload.pokemons
            };
        case CHANGE_POKEMON_PAGE:
            return {
                ...state,
                activePage: action.payload
            };
        default:
            return state;
    }
};

