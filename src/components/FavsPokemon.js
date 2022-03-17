import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editarFavASync, encontrarPokemon, listFavAsync, removeFavASync } from '../redux/actions/actionsPokemonesFav';
import { useFormik } from 'formik';
import * as Yup from "yup";

import "../styles/styles.css"
import Header from './Header';

const FavsPokemon = () => {


    const { pokesFavs } = useSelector((store) => store.pokemonesFav)

    console.log(pokesFavs)
   
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const { encontrado } = useSelector((store) => store.encontrado)
    const pokemonAEditar = pokesFavs.find((p) => p.codigo === encontrado)

const handleLogout = () => {
    dispatch(logoutAsync());
 };

    console.log(encontrado)

    const formik = useFormik({
        initialValues: {
            apodo: ""
        },
        validationSchema: Yup.object({
            apodo: Yup.string().required(),

        }),
        onSubmit: (data) => {
            const { apodo } = data;
            pokemonAEditar.apodo = apodo
            console.log(apodo)
            console.log(pokemonAEditar)
            dispatch(editarFavASync(pokemonAEditar.codigo, pokemonAEditar));
        },
    });



    useEffect(() => {
        dispatch(listFavAsync());


    }, []);


    return (
        <div >
   <Header/>

   <div className='container' >
            {
                pokesFavs.map((e, i) => (
                    <div key={i} className='me ' >
                        <div className='cartita'>
                        <h5 className=''>{e.codigo}</h5>
                            <div className='img' ><img src={e.image} width={200} height={200} /> </div>
                            <h5 className='name'>{e.name}</h5>
                            <h5 className='name'>{e.apodo}</h5>
                            <div className='flex too'>

                                <button className='editar' onClick={() => {
                                    dispatch(encontrarPokemon(e.codigo))
                                    setShow(true)

                                }
                                }>Colocar apodo</button>
                                <div><button className='delete' onClick={(event) => {
                                    event.preventDefault();
                                    dispatch(removeFavASync(e.codigo));
                                }}>Delete</button></div>


                            </div>
                        </div>

                        <>
                            <Modal show={show}  aria-labelledby="example-custom-modal-styling-title" scrollable={true} onHide={handleClose}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    
                                    <form onSubmit={formik.handleSubmit} apodo>
                                        <div className='apodo'>
                                        <h1 > Apodo</h1>
                                        <input onChange={formik.handleChange} type='text' name='apodo' />
                                        <button type='submit' >Guardar</button>
                                        </div>
                                    </form>
                                </Modal.Body>

                            </Modal>
                        </>
                    </div>
                ))
            }

        </div>
        </div>
    )
}

export default FavsPokemon