import "./student.css"
 export default function Student({ student }) {
  return (
    <div 
    style={{border: "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "250px",}}className="student-card">
      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>
      <h2>CGPA: {student.cgpa}</h2>
      <h2>City: {student.city}</h2>
      <button>click</button>
    </div>
  );
}

