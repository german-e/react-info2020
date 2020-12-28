import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class  ResultadoBusqueda extends Component {

    mostrarResultados = () => {
        const datos = this.props.peliculas;

        if (datos.length === 0) return null;

        return (
            <React.Fragment>
                 {datos.map(peli => (
                <div className="col-md-3 mb-5">
                <div className="card" >
                    <img src={peli.image} className="card-img-top" alt="Poster pelicula"/>
                    <div className="card-body">
                        <h5 className="card-title">{peli.title}</h5>
                        <p className="card-text">{peli.description}</p>
                    </div>
                
                    <div className="card-body">
                    <Link to={`/movies/${peli.id}`}>
                        <p className="card-link">Ver detalle</p>
                        </Link>
                    </div>
                </div>
                </div>
            ))}
            </React.Fragment>
        );

    }

    render() {
        {console.log(this.props.peliculas)}
        return(
            <React.Fragment>
                <div className="row">
                {this.mostrarResultados()};
                </div>
            </React.Fragment>
        )
    }

    
}
 
export default ResultadoBusqueda;