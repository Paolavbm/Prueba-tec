import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { listPokemonAsync } from '../redux/actions/actions'
import CardPokemon from './CardPokemon'
import "../styles/styles.css"

const Cards = ({ results }) => {
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(listPokemonAsync())

    }, [dispatch])

    return (
        <div className='container'>

            {
                results.map((e, i) => (
                    <div key={i} className='me' >
                  <div className='card'>
                  <CardPokemon url={e.url}/>
                  <div className='back'>
                  <Link  className="aja" to={"/detalle/" + e.name}>
                  <h5>{e.name}</h5></Link>
                  </div>
                  </div>
                    </div>
                      ))
            }

            {/* <ul>
            {
                results.map(p=>(
                    <li key={p.name}>
                  <CardPokemon url={p.url}/>
                  <Link  className="aja" to={"/detalle/" + p.name}>
                    <h5>{p.name}</h5></Link>
                    </li>
                ))
            }
        </ul> */}

        </div>
    )
}

export default Cards