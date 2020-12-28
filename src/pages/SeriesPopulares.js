import React, { Component } from 'react';
import Card from "../components/Card"

class SeriesPopulares extends Component {
    state = { loading:true, error:null, data:[]  }


    componentDidMount() {
        this.requestData();
    }

    requestData = async () => {
        this.setState({loading:true, error:null});

        try {
            const data = await fetch('https://imdb-api.com/en/API/MostPopularTVs/k_givr4yb9');
           // .then( respuesta => respuesta.json())
           // .then((data) => this.setState({data:data.items}));//this.setState({data:data.items}));
           const pelis = await data.json();
           this.setState({data:pelis.items});
        } catch (error) {
            this.setState({loading:false, error});
            
        }

    }

    render() { 
        return ( 
            <>
            {console.log("Seies desde: ")}
            {console.log(this.state.data)}
            <Card peliculas={this.state.data}/>

            
            </>
         );
    }
}
 
export default SeriesPopulares;