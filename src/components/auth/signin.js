import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignIn() {
    const navigate = useNavigate();

    const [userRegister, setUserRegister] = useState({
        username: '',
        password:'',
    })

    function handleUserRegistration(e) {
        setUserRegister({
            ...userRegister,
            [e.target.username] : e.target.value
        })
    }

    function registerUser(event) {
        event.preventDefault();
        navigate('/')
    }

    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column", width: "400px" }}
          onSubmit={(e) => registerUser(e)}
        >
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={userRegister.username}
            onChange={(e) => handleUserRegistration(e)}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userRegister.password}
            onChange={(e) => handleUserRegistration(e)}
          />

          <button style={{ width: "100px" }}>Sign In</button>
        </form>
      </div>
    );
}

export default SignIn