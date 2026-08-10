import React from "react";
import Card from "./components/card";

function App() {

  const students = [
    {
      id: 1,
      name: "Ali",
      age: 20,
      course: "React"
    },
    {
      id: 2,
      name: "Ahmed",
      age: 22,
      course: "Python"
    },
    {
      id: 3,
      name: "Sara",
      age: 21,
      course: "AI"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <Card user={student} />
          </div>
        );
      })}


    </div>
  );
}

export default App;