import React from 'react';
import Logo from '../../assests/images/logo.png';
import {Link } from 'react-router-dom';

const Nav = (props) =>{
  
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
        <ul className="navbar-nav">          
          <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">            
            <Link to="/my-likes" className="nav-link">Likes</Link>
          </li>          
        </ul>
      </div>
    </nav>
    );
}

export default Nav;