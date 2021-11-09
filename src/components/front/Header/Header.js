import React from 'react';
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
<Link to= "/">Ota yhteyttä</Link>

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

<i class = "fas fa-shopping-cart"/>


</Link>

</li>

</ul>


</div>


</header>



    )

       
    
};

export default Header;
