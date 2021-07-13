import { Component} from "react";

class Films extends Component {

    constructor (props) 
    {
        super (props);

        this.state = 
        {
            films: [],
        };
    }

    componentDidMount () 
    {
        fetch ("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((data) => this.setState({films: data}))
    }

    render ()
    {
        return ( 
            <div>
                {this.state.films.map((film) => 
                {
                    return (
                        <div key ={film.id} className="line">
                             <h2>{film.title}</h2>
                             <h3>{film.original_title}</h3>
                             <p>{film.director}</p>
                             <p>{film.release_date}</p>

                        </div>
                    );
                })}     
            </div>
        );
    }
}


export default Films;