import React from 'react';
//import bank from './images/bank.png';
import { auth, db, logout } from "./firebase";


function NavBarLogin(){
  
     
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a className="navbar-brand" href="#/"><img width="30" height="30" alt=""></img> BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link"  href="#/Balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/home/" onClick={logout}>Log Out</a>
            </li>
          </ul>
        </div>
          </nav>
      </>
    );
  }
  export default NavBarLogin;