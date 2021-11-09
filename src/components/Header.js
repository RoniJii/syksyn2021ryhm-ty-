import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";

import "./Header.css";


const Header = () => {
    
    return (
<header className="header">

<div>
<h1>
<Link to= "/" className= "logo">
Kaffia

</Link>

</h1>

</div>
<div className= "header-links">
<ul>
<li>
<NavDropdown title="Tuoteryhmät" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Kahvit</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Teet</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Makeutusaineet</NavDropdown.Item>
        
          
        </NavDropdown> 


</li>

</ul>
<ul>
<li>
<Link to="/signup">Kirjaudu sisään</Link>

</li>

</ul>
<ul>
<li>
<Link to="/cart" className="cart">




</Link>

</li>

</ul>


</div>


</header>



    )

       
    
};

export default Header;
