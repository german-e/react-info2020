import "./statics/style/navbar.css"

import {Component} from "react"
import { Link } from "react-router-dom";

class NavBar extends Component {
    
    render() { 
        return (<header className="site-header dark sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <Link to="/">
          <p className="py-2" aria-label="Product">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
          </p>
          </Link>
          <Link to='/movies/popularmovies'>
            <p className="py-2 d-none d-md-inline-block">Peliculas más populares</p>
          </Link>
          <Link to="/series/popularseries">
            <p className="py-2 d-none d-md-inline-block">Series más populares</p>
          </Link>          
          
          <a className="py-2 d-none d-md-inline-block" href="#">Próximos Estrenos</a>
          
        </nav>
      </header>  );
    }
}
 
export default NavBar;

