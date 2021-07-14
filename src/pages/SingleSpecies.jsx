import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";                 //hook

function SingleSpecies(props){
    let [species, setSpecies] = useState({});

    let history = useHistory();                                         //let history assing to a variable. go to history instance, for the button to go back to previous page
    let {id} = useParams();                                             //destructuring the id property from the params object which is the url parameters

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/species/" + id)
            .then((res) => res.json())
            .then((data) => setSpecies(data));
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">   
                <button className="button" onClick={history.goBack}>            
                    Back
                </button>
            </div>
            
            <div className="card-body">
                <h1>{species.name}</h1>
                <p> <strong> Classification: </strong> {species.classification}</p>
                <p> <strong> Eye colors: </strong> {species.eye_colors}</p>
                <p> <strong> Hair colors: </strong> {species.hair_colors}</p> 
                <p> {} </p>
            </div>
        </div>
    );
}


export default SingleSpecies;