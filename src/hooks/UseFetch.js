import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [resultado, setResultado]= useState({cargando: true, data:null})
  

useEffect(() => {
  getDatos(url)

}, [url])

 async function getDatos(url){
     try{
      const resp = await fetch(url)
      const data = await resp.json()
      setResultado({cargando:false, data})
     }
     catch (e){
         console.log(e)
     }
  }
    return resultado
}

export default UseFetch