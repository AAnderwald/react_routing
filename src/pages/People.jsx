import {Component} from "react";
import {Link} from "react-router-dom";

class People extends Component {

    constructor (props)
    {
        super (props);
        this.state=
        {
            list: [],
        };
    }

    componentDidMount ()
    {
        fetch ("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((data) => this.setState({list: data}))
    }

    render ()
    {
        return (
            <div>
                <h2 className="pageHeaders"> List of Characters </h2>

                <div className="list-group">
                    {this.state.list.map((item) => (
                        <div key={item.id} className="list-group-item">
                            <Link to={`/people/${item.id}`}>{item.name}</Link>
                          
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



export default People;









