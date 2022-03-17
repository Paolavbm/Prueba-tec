import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UseFetch from '../hooks/UseFetch'
import { listPokemonAsync } from '../redux/actions/actions'

const CardPokemon = ({url}) => {
    const dispatch = useDispatch()
      
        useEffect(() => {
      
          dispatch(listPokemonAsync())
       
      }, [dispatch])

    const estado = UseFetch(url)
    const {cargando, data} = estado
  return (
    <div>
        {
            cargando
            ?
            <h1>cargando</h1>
            :
            <div className='cont-card'>
                <div className='card-shape'>
                 <h5 className="card-id">{data.id}</h5>
                 <img className='card-img'src={data.sprites.front_default}/>
                 <p className='card-type'>{data.types[0].type.name}</p>

                </div>
            </div>
        }
    </div>
  )
}

export default CardPokemon