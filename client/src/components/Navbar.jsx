import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isSignIn,setIsSignIn] = useState(false);
  const [isSignUp,setIsSignUp] = useState(false);

  const signUphanlder = ()=>{
    setIsSignUp(true);
    setIsSignIn(false);
  }
  const signinHandler = ()=>{
    setIsSignIn(true);
    setIsSignUp(false);
  }
  return (
    <nav className="navbar">
      
      <ul className="navbar-menu">
     <li> <Link to="/" className="navbar-logo">
        <h1 className="hgymgenie">GymGenie</h1>
      </Link></li>
        <li className="nav-items">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-items">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nav-items">
          <Link to="/meal">GymGenie MealPlan</Link>
        </li>
        <li className="nav-items">
          <Link to="/contact">MacroTracker</Link>
        </li>
      </ul>
      <div className="navbar-buttons">
        <div className="btn-signup"> <Link to="signin"Sign >Sign In</Link></div>
        <div className="btn-login" ><Link to="signup">Sign Up</Link></div>
        
        
      </div>
    </nav>
  );
}

export default Navbar;
