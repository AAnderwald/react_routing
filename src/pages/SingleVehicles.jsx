import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";

function SingleVehicles(props){
    let [vehicles, setVehicles] = useState({});

    let history = useHistory();
    let {id} = useParams();                              

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles/" + id)
            .then((res) => res.json())
            .then((data) => setVehicles(data));
            
    }, [id]);

        return (
            <div className="card">
                <div className="card-header">
                    <button className="button" onClick={history.goBack}> 
                        Back
                    </button>
                </div>

                <div className="card-body">
                    <h1>{vehicles.name}</h1>
                    <p> <strong> Class: </strong> {vehicles.vehicle_class} </p>
                    <p> <strong> Length: </strong> {vehicles.length} </p>
                    <p> <strong> </strong> {vehicles.description} </p>

                </div>
            </div>
        );
}

 export default SingleVehicles;
