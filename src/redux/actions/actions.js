import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesPokemon } from "../types/types";

export const listPokemonAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "pokemones"));
        const pokemones = [];
        querySnapshot.forEach((doc) => {
            pokemones.push({
                ...doc.data()
            })
        });
        dispatch(listPokemonSync(pokemones));
    }
}

export const listPokemonSync = (pokemones) => {
    return {
        type: typesPokemon.list,
        payload: pokemones
    }

    
}

export const buscarAsync = (searchText) => {
    return async (dispatch) => {
       const traerCollection = collection(db, "pokemones");
       const q = query(traerCollection, where("name","==", searchText));
       const datosQ = await getDocs(q);
       const pokemones = [];
       datosQ.forEach((doc) => {
          pokemones.push({
             ...doc.data(),
          });
       });
       dispatch(buscarSync(pokemones));
    };
 };

 export const buscarSync = (pokemones) => {
    return {
       type: typesPokemon.search,
       payload: pokemones,
    };
 };