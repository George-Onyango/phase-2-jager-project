import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/signin";
import SignOut from "./components/auth/signout";

// Other Components
import LandingPage from "./components/Home_Page";
import Navbar from "./components/Navbar";
import CreateStudent from "./components/registerStudent";

function App() {
  // State for student details
  const [students, setStudents] = useState([]);

  function addNewStudent(newStudent) {
    const updatedStudent = [...students, newStudent];
    setStudents(updatedStudent);
  }
  return (
    <div
      style={{
        backgroundColor: "#CDD3D5",
        backgroundImage:
          `url(
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsX3dHA8e7MYPh5Ui-XizCQ_-RAKGj0PEAEh2uA1M0MP5EwNx28Ix9nLPOYLLYkXjYPc&usqp=CAU)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100vh'
      }}
    >
      <Navbar />
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<LandingPage students={students} />} />
        <Route
          exact
          path="/createStudent"
          element={<CreateStudent addNewStudent={addNewStudent} />}
        />
        <Route exact path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
