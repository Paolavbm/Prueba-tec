import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Cards from "./Cards";
import Header from "./Header";

;

const Search = () => {
    const { buscado } = useSelector((store) => store.buscador);
    const { element } = useParams();

    return (
        <div>
            <Header/>
{           
           
                buscado == 0
                ?
                <h1>No hay reultados que coincidan con su busqueda</h1>
                :
                    <Cards results={buscado} />
         }
        </div>

    )
};

export default Search;