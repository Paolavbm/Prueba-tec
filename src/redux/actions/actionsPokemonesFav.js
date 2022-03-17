import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { pokemonesFav, typesPokemon } from "../types/types";


export const addToFavAsync = (selected) => {

    

        return async (dispatch) => {
            addDoc(collection(db,"pokeFavs"), selected)
            .then(resp => {
                dispatch(addToFavSync(selected))
            })
            .catch(error => {
                console.log(error);
            })
    }
 }

 export const addToFavSync = (selected) => {
    return{

        type: pokemonesFav.añadir,
        payload: selected
    }

}


export const listFavSync = (selected) => {
    return {
        type: pokemonesFav.listar,
        payload: selected
    }
}

export const listFavAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "pokeFavs"));
        const selected= [];
        querySnapshot.forEach((doc) => {
            selected.push({
                ...doc.data()
            })
        });
        dispatch(listFavSync(selected));
    }
}

export const editarFavASync = (codigo, pokemon) =>{
    return async(dispatch) => {
        const traerColection = collection(db,"pokeFavs");
        const q = query(traerColection,where("codigo","==", codigo))
        const datos = await getDocs(q);
        let id;
        datos.forEach(async(docu) => {
            id = docu.id
        });
       const docRef = doc(db, "pokeFavs", id)
       await  updateDoc(docRef, pokemon).then(()=>  listFavAsync())
    }
}


export const editarFavSync = (codigo, pokemon) => {
    return {
        type: pokemonesFav.editar,
        payload: pokemon
    }
}


export const removeFavASync = (codigo) => {
    return async (dispatch) => {
       const traerCollection = collection(db, "pokeFavs");
       const q = query(traerCollection, where("codigo", "==", codigo));
       const datosQ = await getDocs(q);
       datosQ.forEach((docu) => {
          deleteDoc(doc(db, "pokeFavs", docu.id));
       });
       dispatch(removeFavSync(codigo));
    };
 };
export const removeFavSync = (codigo) => {
    return {
       type: pokemonesFav.remover,
       payload: codigo,
    };
 };

 export const encontrarPokemon = (codigo) => {
    return {
        type: pokemonesFav.encontrado,
        payload: codigo
    }
}


