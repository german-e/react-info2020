import React, { Component } from "react";
import Card from "./Card";


class Buscador extends Component{
    
    
        
        
    
    

    buscarPeliRef = React.createRef();

    
    handleGetData = (e) =>  {
        e.preventDefault();
        const criterio = this.buscarPeliRef.current.value;
        this.props.termino(criterio);
      

        
    }



    /* getDataRequest = async () => {
        

        const data = await fetch(`https://imdb-api.com/en/API/Search/k_givr4yb9/${criterio}`);
        
        const pelis = await data.json();
        this.setState({data:pelis.results});

            {console.log(data.url)}

        {console.log(this.state.data)}

       // <Card peliculas = {this.state.data}/>

    } */
    render() {
        return (
            <>
        <form onSubmit={this.handleGetData}>
   
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Buscador de Films</h1>
                    <p className="lead text-muted">Busca tu Films. Puedes buscar por actor, título, etc. Por ejemplo: Inception 2020</p>
                
                    
                        <div className="form-group">
                            <input ref={this.buscarPeliRef} type="text" className="form-control form-control-lg"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-danger my-2" value="Buscar..."></input>
                        </div>
                    
                    
                    
                </div>
            </div>
        </section>
    

            </form>

            
            

           </>

        )
    }
}
export default Buscador;

