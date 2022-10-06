import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Other Components
import LandingPage from "./components/Home_Page";
import CreateStudent from "./components/registerStudent";

function App() {
  // State for student details
  const [students, setStudents] = useState([]);

  function addNewStudent(newStudent) {
    const updatedStudent = [...students, newStudent];
    setStudents(updatedStudent);
  }
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage students={students} />} />
      <Route
        exact
        path="/createStudent"
        element={<CreateStudent addNewStudent={addNewStudent} />}
      />
    </Routes>
  );
}

export default App;
