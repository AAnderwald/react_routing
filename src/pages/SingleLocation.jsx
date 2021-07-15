import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";
    

function SingleLocation(props){
    let [location, setLocation] = useState({});

    let history = useHistory();
    let {id} = useParams();                              

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/locations/" + id)
            .then((res) => res.json())
            .then((data) => setLocation(data));
            
    }, [id]);

        return (
            <div className="card">
                <div className="card-header">
                    <button className="button" onClick={history.goBack}> 
                        Back
                    </button>
                </div>

                <div className="card-body">
                    <h1>{location.name}</h1>
                    <p> <strong> Climate: </strong> {location.climate} </p>
                    <p> <strong> Terrain: </strong> {location.terrain}  </p>
                    <p> <strong> Surface Water: </strong> {location.surface_water} </p>
                </div>
            </div>
        );
}


export default SingleLocation;