import { Card } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import { buscarAsync, listPokemonAsync, listPokemonSync } from '../redux/actions/actions'
import Cards from './Cards'
import Header from './Header'

const ListPokemon = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);

  //   useEffect(() => {

  //     dispatch(listPokemonAsync())

  // }, [dispatch])

  const { pokemons } = useSelector((store) => store.pokemones)
  const { buscado } = useSelector((store) => store.buscador)

  // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=50&limit=25')
  // const estado = UseFetch(url)
  // const {cargando, data} = estado
  // cargando ? console.log('cargando'):console.log(data.results)

  console.log(pokemons)

  // useEffect(() => {

  //   dispatch(listPokemonAsync()


  // }, [])

  const navigate = useNavigate();

  const formik = useFormik({
     initialValues: {
        name: "",
     },
     onSubmit: (data) => {
        const { name } = data;

        console.log(name);
        dispatch(buscarAsync(name));
        navigate("/search/" + name);
     },
  });



  useEffect(() => {

    dispatch(listPokemonAsync())

  }, [])
  


  console.log(pokemons)
  return (
    <div>
<Header/>





      <Cards results={pokemons} />


      {/* {
        checking
        ?
        <h1>Cargando</h1>
        :
        pokemons[0].map((e, i) => (
          <div key={i} className='' >
       
 
        <h1>{pokemons[0].name}</h1>
        
          </div>
            ))
      } */}


    </div>
  )
}

export default ListPokemon