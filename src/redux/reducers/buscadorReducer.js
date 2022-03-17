import { typesPokemon } from "../types/types";


const initialState = {
   buscado: [],
};

export const buscadoReducers = (state = initialState, action) => {
   switch (action.type) {
      case typesPokemon.search:
         return {
            ...state,
            buscado: [...action.payload],
         };

      default:
         return state;
   }
};