import "./forms.css";
import { useState } from "react";
function Forms() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Display states
  const [showName, setShowName] = useState("");
  const [showEmail, setShowEmail] = useState("");
  const [showPassword, setShowPassword] = useState("");

  function handleShow() {
    setShowName(name);
    setShowEmail(email);
    setShowPassword(password);
  }

  return (
   <div className="container">
  <h1>Student Form</h1>

  <div className="input-group">
    <input
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="input-group">
    <input
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="input-group">
    <input
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <button onClick={handleShow}>
    Show Data
  </button>

  <div className="result">
    <h2>Name: <span>{showName}</span></h2>
    <h2>Email: <span>{showEmail}</span></h2>
    <h2>Password: <span>{showPassword}</span></h2>
  </div>
</div>
  );
}

export default Forms;