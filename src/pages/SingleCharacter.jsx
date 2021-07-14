import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";

function SingleCharacter(props){
    let [person, setPerson] = useState({});

    let history = useHistory();
    let {id} = useParams();                              

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/people/" + id)
            .then((res) => res.json())
            .then((data) => setPerson(data));
            
    }, [id]);

        return (
            <div className="card">
                <div className="card-header">
                    <button className="button" onClick={history.goBack}> 
                        Back
                    </button>
                </div>

                <div className="card-body">
                    <h1>{person.name}</h1>
                    <p> <strong> Gender: </strong> {person.gender} </p>
                    <p> <strong> Age: </strong> {person.age} </p>
                    <p> <strong> Hair color: </strong> {person.hair_color} </p>
                    <p> <strong> Eye color: </strong> {person.eye_color} </p>
                    <p> </p>
                </div>
            </div>
        );
}

 export default SingleCharacter;