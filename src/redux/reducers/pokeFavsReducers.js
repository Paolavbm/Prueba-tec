import { pokemonesFav } from "../types/types";

const initialState = {
    pokesFavs: [],

}



export const pokesFavReducer = (state = initialState, action) => {
    switch (action.type) {
        case pokemonesFav.añadir:
            return {
               pokesFavs: [action.payload]
            }
        case pokemonesFav.listar:
            return {
                pokesFavs: [...action.payload]
            }
        case pokemonesFav.editar:
            return {
               ...state,
            }

            case pokemonesFav.remover:
                return {
                   pokesFavs: state.pokesFavs.filter((p) => p.codigo !== action.payload),
                };
       
        default:
            return state;
    }
}

