import { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router-dom";                 //hook

function SingleFilm(props){
    let [film, setFilm] = useState({});

    let history = useHistory();                                         //let history assing to a variable. go to history instance, for the button to go back to previous page
    let {id} = useParams();                                             //destructuring the id property from the params object which is the url parameters

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/films/" + id)
            .then((res) => res.json())
            .then((data) => setFilm(data));
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">   
                <button className="button" onClick={history.goBack}>            
                    Back
                </button>
            </div>
            
            <div className="card-body">
                <h1> {film.title} </h1>
                <h3> {film.original_title} </h3>
                <p> <strong> Running time: </strong> {film.running_time} </p>
                <p> <strong> Director: </strong> {film.director} </p>
                <p> <strong> Release date: </strong>  {film.release_date} </p>
                <p> <strong> All about this movie: </strong> {film.description} </p>
            </div>

        </div>
    );

}

export default SingleFilm;