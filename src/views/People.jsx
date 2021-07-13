import { useState, useEffect } from "react";

function People() 
{
    let [people, setPeople] = useState ([]);

    useEffect (() => 
    {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then ((data) => setPeople(data));
    }, [] );

    return (
        <div>
            {people.map((person) =>
            {
                return (
                    <div key={person.id} className="line" >
                        <h2>{person.name}</h2>
                        <p>{person.age}</p>
                    </div>    
                );
            })}
        </div>
    );

}


export default People;