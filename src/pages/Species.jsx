import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import SingleSpecies from "./SingleSpecies";


function Species() 
{
    let [species, setSpecies] = useState ([]);


    useEffect (() => 
    {
        fetch("https://ghibliapi.herokuapp.com/species")
        .then((res) => res.json())
        .then ((data) => setSpecies(data));
    }, [] );

    return (
        <div>
             <h2 class="pageHeaders">List of Species</h2>
            {species.map((specie) =>
            {
                return (
                    <div key={SingleSpecies.id} className="speciesDiv card">
                   
                        <Link to={`/species/${specie.id}`}> {specie.name} </Link>
                        
                    </div>    
                );
            })}
        </div>
    );
    
}



export default Species;