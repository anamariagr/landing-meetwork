import React from 'react';

const Navbar = props =>{

    return(
      
    
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href=" # ">
        <img className="imglogo" alt="icon" src="./img/logo1.png"/> 
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span >
          <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  ml-md-auto ">
          <li className="nav-item active">
            
                <a className="nav-link nav-hover" href="https://meetwork.co/login">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item"> 
                <a class="nav-link nav-hover" href="#downdload ">Registrate</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-hover" href="https://meetwork.space/">Registra tu espacio</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link nav-hover" href="#comuniti ">Comunidad</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-hover" href="#prices">Precios</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-contact contact-hover" href=" # ">Contactanos</a>
            </li>
          </ul>
        </div>
      </nav>

    );

}

export default Navbar;