import {Component} from "react"; 
import{Link} from "react-router-dom";

// this is the class one
class Films extends Component {

    constructor (props) 
    {
        super (props);
        this.state = 
        {
            list: [],
        };
    }

    componentDidMount ()                                                        //used with setState help to change the applications state and updates are rendered
    {
        fetch ("https://ghibliapi.herokuapp.com/films")                         //this will get the films 
            .then((res) => res.json())
            .then((data) => this.setState({list: data}))

    }

    render ()
    {
        return ( 
            <div>
                <h2 className="pageHeaders"> List of Films </h2>

                <div className= "list-group">
                    {this.state.list.map((item) => (
                        <div key ={item.id} className="list-group-item">
                            <Link to={`/films/${item.id}`}>{item.title}</Link>
                        </div>
                    ))}     
                </div>
            </div>
        );
    }
}
                

export default Films;