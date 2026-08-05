import "./form.css";
import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "abid" && password === "1234") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>{login ? `Welcome ${username}` : "Login Account"}</h2>

        <p>Enter your credentials to continue.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        {/* Result */}
        {login ? (
          <h3 style={{ color: "green", marginTop: "20px" }}>
            ✅ Login Successful
          </h3>
        ) : (
          <h3 style={{ color: "red", marginTop: "20px" }}>
            ❌ Login Failed
          </h3>
        )}
      </div>
    </div>
  );
}

export default Form;