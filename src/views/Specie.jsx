import { useState, useEffect } from "react";



function Specie() 
{
    let [specie, setSpecie] = useState ([]);

    useEffect (() => 
    {
        fetch("https://ghibliapi.herokuapp.com/species")
        .then((res) => res.json())
        .then ((data) => setSpecie(data));
    }, [] );

    return (
        <div>
            {specie.map((species) =>
            {
                return (
                    <div key={species.id} className="line">
                        <h2>{species.name}</h2>
                        <p>{species.classification}</p>
                        <p>{species.eye_colors}</p>
                        <p>{species.hair_colors}</p>
                    </div>    
                );
            })}
        </div>
    );

}


export default Specie;