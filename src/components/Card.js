import React, { Component } from 'react';
import Film from './Film';
class Card extends Component { 

    mostrarResultado =() => {
        
        const pelis = this.props.peliculas;
        if (pelis.length === 0) return null

        return (
            <React.Fragment>
                {pelis.map(peli => (
                    <Film
                    key={peli.id}
                    id={peli.id}
                    staff={peli.crew}
                    imagen = {peli.image}
                    title={peli.title}
                    year={peli.year}
                    IMDBRating={peli.imDbRating}
                    

                    />
                ))}
            </React.Fragment>
        );
        

    }
    
        render() {
            return ( 

                <div className="row mt-5">
                    {this.mostrarResultado()}
                </div>
            
            // <div className="col-md-3 mb-5">
            //     <div className="card" >
            //         <img src="{props.peliculas.image} "className="card-img-top" alt="..."/>
            //         <div className="card-body">
            //             <h5 className="card-title">Principal</h5>
            //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //         </div>
            //         <ul className="list-group list-group-flush">
            //             <li className="list-group-item">Cras justo odio</li>
            //             <li className="list-group-item">Dapibus ac facilisis in</li>
            //             <li className="list-group-item">Vestibulum at eros</li>
            //         </ul>
            //         <div className="card-body">
            //             <a href="#" className="card-link">Card link</a>
            //             <a href="#" className="card-link">Another link</a>
            //         </div>
            //     </div>
            // </div>
       
         );
    }
}

 
export default Card;

