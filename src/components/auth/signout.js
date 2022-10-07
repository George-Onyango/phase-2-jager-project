import React from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  function logout() {
    navigate("/signin");
  }

  function backToHomePage() {
    navigate("/");
  }

  return (
    <div>
      <p>Do you wish to leave</p>
      <button
        style={{
          borderRadius: "10",
          color: "#75B8C8",
          backgroundColor: "#CDD3D5",
          margin: "0 10px 0 15px",
          width: "150px",
          height: "50px",
        }}
        onClick={logout}
      >
        Sign out
      </button>
      <button
        style={{
          width: "150px",
          height: "50px",
          borderRadius: "10",
        }}
        onClick={backToHomePage}
      > Go Home</button>
    </div>
  );
}

export default SignOut;
