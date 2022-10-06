import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: 'inline-block',
    width: '100px',
    padding: "20px",
    margin: '0 10px 10px',
    background: "rgb(12 74 110)",
    textDecoration: 'none',
    color: 'white',
    borderRadius: '6px'
};

function Navbar() {
    return (
       <div
      style={{
        width: "1000px",
        textAlign: "center",
      }}
    >
      <NavLink to="/signin" exact="true" style={linkStyles}>
        Sign In
      </NavLink>
      <NavLink to="/" exact="true" style={linkStyles}>
         Home
      </NavLink>
      <NavLink to="/createstudent" exact="true" style={linkStyles}>
        Create Resume
      </NavLink>
      <NavLink to="/signout" exact="true" style={linkStyles}>
        Sign Out
      </NavLink>
    </div> 
    )
}

export default Navbar