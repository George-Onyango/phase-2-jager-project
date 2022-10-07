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

    fetch(`http://localhost:3000/student`, {
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
    <div>
      <form className="resume" onSubmit={(e) => createStudent(e)}>
        {/*official name, phone, email */}
        <div>
          <h3>Contact Details</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={studentDetails.name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={studentDetails.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="github">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={studentDetails.mobile}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Education */}
        <div className="education">
          <h3>Previuos Academic Report</h3>
          <label htmlFor="education">Most Recent Education level</label>
          <input
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
          <input
            type="text"
            name="clarification"
            id="nationalId"
            value={studentDetails.nationalId}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Submit button */}
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateStudent;
