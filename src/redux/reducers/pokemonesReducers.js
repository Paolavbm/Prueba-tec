import { typesPokemon } from "../types/types"

const initialState = {
    pokemons: [],
  
}




export const pokemonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPokemon.list:
            return {
                pokemons: [...action.payload]
            }

            
        default:
            return state;
    }
}

