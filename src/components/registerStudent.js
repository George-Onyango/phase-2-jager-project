import React, { useState } from "react";

function CreateStudent({ addNewStudent }) {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    education: "",
    nationalId: "",
  });

  function handleChange(e) {
    setStudentDetails({
      ...studentDetails,
      [e.target.name]: e.target.value,
    });
  }

  function createStudent(e) {
    e.preventDefault();

    fetch(`https://my-json-datab.herokuapp.com`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepted: "application/json",
      },
      body: JSON.stringify(studentDetails),
    })
      .then((res) => res.json())
      .then((data) => addNewStudent(data));

    // To clear the input fields
    setStudentDetails({
      name: "",
      email: "",
      mobile: "",
      education: "",
      nationalId: "",
    });
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
          borderRadius: "20px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
          opacity: ".9",
        }}
      >
        <form className="resume" onSubmit={(e) => createStudent(e)}>
          {/*official name, phone, email */}
          <div id="form-detail">
            <h3>Contact Details</h3>
            <label htmlFor="name">Name</label>
            <br />
            <input
              style={{ marginBottom: "10px", height: "30px" }}
              type="text"
              name="name"
              value={studentDetails.name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              style={{ marginBottom: "10px", height: "30px" }}
              type="email"
              name="email"
              id="email"
              value={studentDetails.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="github">Mobile Number</label>
            <br />
            <input
              style={{ marginBottom: "10px", height: "30px" }}
              type="number"
              name="mobile"
              value={studentDetails.mobile}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Education */}
          <div className="education">
            <h3>Previuos Academic Report</h3>
            <label htmlFor="education">Most Recent Education level</label>
            <br />
            <input
              style={{ height: "30px" }}
              type="text"
              name="education"
              value={studentDetails.education}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* identity */}
          <div className="identification">
            <h3>Form of Identification</h3>
            <label htmlFor="identification">National ID</label>
            <br />
            <input
              style={{ height: "30px", marginBottom: "20px" }}
              type="number"
              name="nationalId"
              id="nationalId"
              value={studentDetails.nationalId}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Submit button */}
          <button
            style={{
              width: "90px",
              height: "30px",
              marginBottom: "20px",
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
