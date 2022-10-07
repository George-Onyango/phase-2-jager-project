import React, { useState } from "react";
import DisplayStudent from "./renderStudent";

function LandingPage() {
  const [filterName, setFilterName] = useState("");

  const [identicalName, setIdenticalName] = useState("");

  function getUserInput(e) {
    const name = e.target.value;
    setFilterName(name);
  }

  function findStudent(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/student`)
      .then((res) => res.json())
      .then((students) => {
        const searchedStudent = students.find(
          (student) =>
            student.name.split(" ").join("").toLowerCase() ===
            filterName.split(" ").join("").toLowerCase()
        );
        setIdenticalName(searchedStudent);
      });
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
                  backgroundColor: "#75B8C8",
                  opacity: '.9',
          height:'100vh'
        }}
      >
        <h1>This is a student transcript filler</h1>
        <form onSubmit={(e) => findStudent(e)}>
          <input
            style={{
              height: "50px",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="search resume"
            value={filterName}
            onChange={(e) => getUserInput(e)}
          />
          <button
            style={{
              marginLeft: "10px",
              height: "30px",
            }}
          >
            Search
          </button>
        </form>

        <div>
          {identicalName ? (
            <DisplayStudent student={identicalName} />
          ) : (
            <p>
              <strong>No Students registered</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
