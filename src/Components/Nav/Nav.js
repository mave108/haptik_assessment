import React from 'react';
import {Link } from 'react-router-dom';

const Nav = (props) =>{
  
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path>
          <path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path>
        </g>
      </svg>
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