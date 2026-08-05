import { useState } from "react";

export function Student() {
    const [showbtn,setShowbtn]=useState(false)
  let name = "Muhammad Abid";
  let course = "AI & ML Student";

  return (
    
    <div className="card">
      <h1>👨‍🎓 Student Profile</h1>

      <h2>{name}</h2>

      <p>This is an {course}</p>

      <button onClick={() => setShowbtn(!showbtn)}>
        {showbtn ? "Hide Details" : "Show Details"}
      </button>
      {showbtn && (
         <div className="details">
        <p><strong>University:</strong> University of Swat</p>
        <p><strong>Semester:</strong> 6th</p>
        <p><strong>City:</strong> Swat</p>

        <h3>Skills</h3>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    
      )
      }
    </div> 
  );
}