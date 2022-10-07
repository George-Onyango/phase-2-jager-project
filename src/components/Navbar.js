import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "",
  width: "100px",
  padding: "20px",
  margin: "0 10px 10px",
  background: "#75B8C8",
  textDecoration: "none",
  color: "#CDD3D5",
  borderRadius: "6px",
};

function Navbar() {
    return (
       <div
      style={{
        width: "1000px",
          textAlign: "center",
          paddingTop: '50px',
        paddingBottom:'50px'
      }}
    >
      <NavLink to="/signin" exact="true" style={linkStyles}>
        Sign In
      </NavLink>
      <NavLink to="/" exact="true" style={linkStyles}>
         Home
      </NavLink>
      <NavLink to="/createstudent" exact="true" style={linkStyles}>
        Create Student
      </NavLink>
      <NavLink to="/signout" exact="true" style={linkStyles}>
        Sign Out
      </NavLink>
    </div> 
    )
}

export default Navbar