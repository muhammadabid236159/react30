import { useState } from "react";
import "./Registerform.css";

function Registerform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const submitButton = (e) => {
    e.preventDefault();

    if (!name || !email || !age || !course || !gender) {
      setError("Please fill all the fields.");
      return;
    }

    setError("");

    setStudent({
      name,
      email,
      age,
      course,
      gender,
    });

    // Reset Form
    setName("");
    setEmail("");
    setAge("");
    setCourse("");
    setGender("");
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={submitButton}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <h3>Select Course</h3>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">-- Select Course --</option>
          <option value="Web Development">Web Development</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
        </select>

        <h3>Select Gender</h3>

        <div className="gender">

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>

        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>

      {student && (
        <div className="student-card">

          <h2>Student Information</h2>

          <p>
            <strong>Name:</strong> {student.name}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

          <p>
            <strong>Age:</strong> {student.age}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <p>
            <strong>Gender:</strong> {student.gender}
          </p>

        </div>
      )}
    </div>
  );
}

export default Registerform;