import React, { Component } from 'react';
import ResultadoBusqueda from "./ResultadoBusqueda";
import Buscador from "../components/Buscador";

class Home extends Component {
    state = { loading:true, error:null, data:[], criterio:''  }


    /* componentDidMount() {
        this.requestData();
    

    } */
    requestData = async () => {
        this.setState({loading:true, error:null});

        try {
            const data = await fetch(`https://imdb-api.com/en/API/Search/k_givr4yb9/${this.state.criterio}`);
           // .then( respuesta => respuesta.json())
           // .then((data) => this.setState({data:data.items}));//this.setState({data:data.items}));
           const pelis = await data.json();
           this.setState({data:pelis.results});
           {console.log(this.state.data)};
        } catch (error) {
            this.setState({loading:false, error});
            
        }

    }

    terminoBusqueda = (criterio) => {
        this.setState({criterio}, () => {
            this.requestData();
        })
    }

    render() { 
        return ( 
            <>
            <Buscador termino = {this.terminoBusqueda}/>
            {console.log("HOME desde: ")}
            <h2>{this.state.criterio}</h2>
            {console.log(this.state.criterio)};
            <ResultadoBusqueda peliculas={this.state.data}/> 

            
            </>
         );
    }
}
 
export default Home;