import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/"><h3>Cocktail</h3></Link>
        
      </div>
    </nav>
  );
}

export default Navbar