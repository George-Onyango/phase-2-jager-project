import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
  });

  function handleUserRegistration(e) {
    setUserRegister({
      ...userRegister,
      [e.target.username]: e.target.value,
    });
  }

  function registerUser(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#75B8C8",
          borderRadius: '20px',
          paddingBottom: '30px',
          opacity:'.8'
        }}
      >
        <form
          style={{
            justifyContent: "center",
            width: "100vh",
            marginTop: "20px",
          }}
          onSubmit={(e) => registerUser(e)}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <label htmlFor="username">Username: </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              value={userRegister.username}
              onChange={(e) => handleUserRegistration(e)}
            />

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <label htmlFor="password">Password: </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={userRegister.password}
                onChange={(e) => handleUserRegistration(e)}
              />
            </div>

            <button
              style={{
                width: "100px",
                marginTop: "30px",
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
