import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import SingleVehicles from "./SingleVehicles";

function Vehicles() 
{
    let [vehicles, setVehicles] = useState ([]);

    useEffect (() => 
    {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
        .then((res) => res.json())
        .then ((data) => setVehicles(data));
    }, [] );


    return (
        <div>
            <h2 class="pageHeaders">List of Vehicles</h2>
            {vehicles.map((vehicles) =>
            {
                return (
                    <div key={SingleVehicles.id} className="list-group-item line" >
                        <Link to={`/vehicles/${vehicles.id}`}> {vehicles.name} </Link>
                    </div>    
                );
            })}
            <div class="vehicleImages">
                <div>
                    <img class="sosukesBoat" src="Sosukes_Boat.jpg" alt="Sosuke's Boat" />
                </div>

                <div>
                    <img class="airDestroyer"src="air_destoyer_goliath.jpg" alt="air deptroyer goliath" />
                </div>

                <div>
                    <img class="redWing"src="porco_red_wing.jpg" alt="porco red wing" />
                </div>
            </div>
        </div>


    );
    

}



export default Vehicles;