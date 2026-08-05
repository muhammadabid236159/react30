import "./login.css";
import { useState } from "react";

function Login() {
    const [login, setLogin] = useState(false)
    return (
        <div className="container">
            <div className="login-card">

                <div className="profile">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profile"
                    />
                </div>

                <h1>{login ? "WelcomeBack!" : "PleaseLogin"}</h1>

                <p>
                    {login ?"You have successfully logged into your account.":"Please login to continue and access your dashboard."}
                </p>

                <div className="status">
                    <span>Status:</span>
                    <strong>{login ? " Online 🟢": " Offline 🔴"}</strong>
                </div>
                <button onClick={()=>setLogin(!login)}>
                    {login ? "Login":"Logout"}
                </button>

            </div>
        </div>
    )
}
export default Login;