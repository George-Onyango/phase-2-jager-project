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

      fetch()
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
        <div>
          <h1>This is a student transcript filler</h1>
          <form onSubmit={(e) => findStudent(e)}>
            <input
              type="text"
              placeholder="search resume"
              value={filterName}
              onChange={(e) => getUserInput(e)}
            />
            <button>Search</button>
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


export default LandingPage