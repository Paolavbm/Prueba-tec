import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import { addToFavAsync } from '../redux/actions/actionsPokemonesFav'

const DetallePokemon = () => {
    const { pokemon } = useParams()

    const {pokemons} = useSelector((store)=> store.pokemones)
    const currentOne = pokemons.find((p) => p.name === pokemon)


    const url = currentOne.url
    const estado = UseFetch(url)


    const {cargando, data} = estado
 
    
   

   useEffect(() => {
    
}, [])


const dispatch = useDispatch();
const addFav = () => {
    
  const selected = {
      codigo: data.id,
      apodo: "",
      name: data.forms[0].name,
      image: data.sprites.front_default,
      cant: 1
  }
  dispatch(addToFavAsync(selected))
  console.log(selected)
  
}


  return (
    <div className=''>
       {
            cargando
            ?
            <h1>cargando</h1>
            :
            <div className='containerDet'>
                <div className='detalle-cont'>
                  <div className='detalle-name'><h3>{data.forms[0].name}</h3></div>
                 <h5 className='id-detalle'>#{data.id}</h5>
                 <div>
                 <div className='info'>
                 <img src={data.sprites.front_default} width={160}/>
                 <div>

                 <h4>{data.abilities[0].ability.name}</h4> <br/>
                 
                 <h4>{data.abilities[1].ability.name}</h4>
                 </div>
                 </div>

                 </div>
                

                <div className='datos-random'>
                  <div className='ju'>
                 <p>Height:{data.height}p</p>
                 </div>
                 <div className='ju'>
                 <p>Weight:{data.weight}lb</p>
                 </div>
                 </div>
                 

                 <div className='div-boton'>
                 
                 <button className='btn-c' onClick={addFav} >Agregar a favoritos</button>
                 </div>
                </div>
            </div>
        }
    </div>
  )
}

export default DetallePokemon