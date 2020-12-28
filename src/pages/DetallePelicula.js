import React, { Component } from 'react';
import Actores from '../components/Actores'


class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true, error:null, data:{}, listaActores:[]  }

    }      

    componentDidMount() {
       
       this.requestData();
       
    }

    requestData = async () => {
        this.setState({loading:true, error:null});

        try {
            const data = await fetch(`https://imdb-api.com/en/API/Title/k_givr4yb9/${this.props.match.params.idmovie}`);
           // .then( respuesta => respuesta.json())
           // .then((data) => this.setState({data:data.items}));//this.setState({data:data.items}));

           const detalle = await data.json();

           this.setState({data:detalle, listaActores:detalle.actorList});

            {console.log(this.state.actorList)}

        } catch (error) {
            this.setState({loading:false, error});
            
        }

    }


    render() { 
        return ( 
           
            <div className="card mb-3" >
                <div className="card-header">
                    <h3>{this.state.data.title} ({this.state.data.year} )</h3>
                </div>

               
            <div className="row g-0">
             
                <img src={this.state.data.image} className="rounded" alt="poster"/>
            
            
              
              <div className="col-md-12">
                <div className="card-body">
                  <h5 className="card-title">{this.state.data.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Puntuación imDB {this.state.data.imDbRating}</h6>
                  <p className="card-text">{this.state.data.plot}</p>
                  <p className="card-text">Director: {this.state.data.directors}</p>
                  <p className="card-text">Genero: {this.state.data.genres}</p>
                  <p className="card-text"><small className="text-muted">Estreno: {this.state.data.releaseDate}</small></p>
                  <ul className="list-group list-group-flush">
                        <li className="list-group-item">Premios: {this.state.data.awards}</li>
                    </ul>
                 <Actores lista= {this.state.listaActores}/>

                </div>
              </div>
            </div>
          </div>
          
            );
    }
}
export default DetallePelicula;


