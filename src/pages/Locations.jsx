import {Component} from "react"; 

// this is the class one
class Locations extends Component {

    constructor (props) 
    {
        super (props);

        this.state = 
        {
            locations: [],
        };
    }

    componentDidMount () 
    {
        fetch ("https://ghibliapi.herokuapp.com/locations")
            .then((res) => res.json())
            .then((data) => this.setState({locations: data}))
    }


    render () 
    {
        return (
            <div>
                <h2 class="pageHeaders">List of Locations</h2>
                {this.state.locations.map((location) =>
                {
                    return (
                        <div key ={location.id} className="line">
                            <h4>{location.name}</h4>
                            <p> <strong>Climate: </strong> {location.climate}</p>
                            <p> <strong>Terrain: </strong> {location.terrain}   <strong>Surface Water: </strong> {location.surface_water}</p>
                        </div>
                    );

                })}
            </div>
        );

    }
}    
    export default Locations;