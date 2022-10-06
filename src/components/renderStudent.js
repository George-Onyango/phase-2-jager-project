import React from "react";

function DisplayStudent({ student }) {
    return (
      <div>
        <h2>{student.name}</h2>
        <br />
        <h3>Personal Information</h3>
        <li>Email: {student.email}</li>
        <li>Github Profile: {student.mobile}</li>
        <br />
        <h3>Education</h3>
        <li>{student.education}</li>
        <br />
        <h3>Identification</h3>
        <li>{student.nationalId}</li>
        <br />
      </div>
    );
}

export default DisplayStudent