import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Actores extends Component {

    
    render() { 
        const listaActores = this.props.lista;
        if (listaActores.length === 0) return null;
        return ( 
            <React.Fragment>
                <h3>LISTA DE ACTORES</h3>
                <div className="row">
                    {listaActores.map(actor => (
                <div className="col-md-2 mb-5">
                <div className="card" >
                    <img src={actor.image} className="card-img-top" alt="actor image"/>
                    <div className="card-body">
                        
                        <h5 className="card-title">{actor.name}</h5>
                        
                        <p className="card-text">Personaje: {actor.asCharacter}</p>
                    </div>
                    
                </div>
           </div>
            ))}
            </div>
            </React.Fragment>
         );
    }
}
 
export default Actores;