import {  pokemonesFav, typesPokemon } from "../types/types";

const initialState = {
    encontrado: 0
}

export const encontradoRedu = (state = initialState, action) => {
    switch (action.type) {
        case pokemonesFav.encontrado:

        return{
            encontrado: action.payload
        }

        default:
          return state;
    }
}