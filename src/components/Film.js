import React from 'react';
import { Link } from 'react-router-dom';

const Film = (props) => {
    return (
        
        <div className="col-md-3 mb-5">
                 <div className="card" >
                     <img src={props.imagen} className="card-img-top" alt="Poster pelicula"/>
                     <div className="card-body">
                         <h5 className="card-title">{props.title}</h5>
                         <p className="card-text">{props.staff}</p>
                     </div>
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item">Año: {props.year}</li>
                         <li className="list-group-item">Puntuacion IMDB: {props.IMDBRating}</li>
                         
                     </ul>
                     <div className="card-body">
                        <Link to={`/movies/${props.id}`}>
                         <p className="card-link">Ver detalle</p>
                         </Link>
                     </div>
                 </div>
            </div>
    );
}

export default Film;