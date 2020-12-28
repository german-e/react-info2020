
import NavBar from "./components/NavBar"
import Home from "./pages/Home"

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import DetallePelicula from "./pages/DetallePelicula";
import SeriesPopulares from "./pages/SeriesPopulares";
import PeliculasPopulares from "./pages/PeliculasPopulares";




function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <div className="container">
        
    
        <Switch>
        
          <Route path="/" exact component={Home} />          
          <Route path="/movies/popularmovies" exact component={PeliculasPopulares} />
          <Route path="/movies/:idmovie" component={DetallePelicula} />
          <Route path="/series/popularseries" component={SeriesPopulares}/>
        
        </Switch>

               
        </div>
        <Footer/> 
      </BrowserRouter>
      

  );
}

export default App;
