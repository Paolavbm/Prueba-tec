// import { addDoc, collection } from 'firebase/firestore'
// import React from 'react'
// import { db } from './firebaseConfig'

// const EnviarAFirebase = () => {

//     const api='https://pokeapi.co/api/v2/pokemon?offset=50&limit=25'


// const obtenerApi = async(api) =>{
//   const resp = await fetch(api)
//   const datos = await resp.json()

//   console.log(datos.results)
//   enviarDatos(datos.results)
// }
// const enviarDatos = (datos)=>{
// datos.forEach(card =>{
//     const {id, name, url}= card

//     const pasarApi ={
//         name: name,
//         url: url,
//     }

//     addDoc(collection(db, "pokemones2"), pasarApi)
//     .then(resp =>{
//         console.log('agregado...')
//     })
//     .catch(error =>{
//         console.log('no se agrego')
//     })
// })
// }

//  obtenerApi(api)
   
 

// //  const enviarDatos = (data) =>{
// //     data.forEach(card =>{
// //         const {name, url}= card



// //      const pasarApi ={
// //          name: name,
// //         url : url
// //      }
// //      addDoc(collection(db, "pokemones"),pasarApi)
// //       .then(resp=>{
// //           console.log('agregado...')
// //       })
// //       .catch(error =>{
// //           console.log('no se agrego')
// //       })

// //     })
// //  }


// // obtenerApi()


//   return (
//     <div>enviarAFirebase</div>
//   )
// }

// export default EnviarAFirebase