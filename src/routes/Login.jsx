import { Link, useNavigate } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import flitterIcon from "../assets/flitterIcon.svg";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:3000/api/login", formData);
      setMessage(res.data.message || "login successful!");
      localStorage.setItem("token", res.data.token);
      setError("");
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message);
      setMessage("");
    } finally {
      setIsLoading(false);
      setMessage("Login Successfully");
    }
  };

  const handleGuest = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/guest");
      console.log("Guest Login:", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError("Failed to login as guest");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>
          login
          <img
            src={flitterIcon}
            style={{ marginLeft: "5px", height: "30px", width: "30px" }}
            alt=""
          />
        </h1>
        {error && <p style={{ color: "red" }}>{error}, Failed to submit</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        <div>
          <label htmlFor="login_email">Email:</label>
          <input
            type="email"
            id="login_email"
            placeholder="testuser@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ alignContent: "center" }}>
          <label htmlFor="login_password">Password:</label>
          <input
            type={showPassword == true ? "text" : "password"}
            id="login_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              paddingRight: "40px",
              boxSizing: "border-box",
              position: "relative",
            }}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={eyeIcon}
            alt="toggle password visibility"
            style={{
              position: "absolute",
              right: "10px",
              top: "55%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
          />
        </div>

        <div className="login-footer">
          <button className="login-submit" disabled={isLoading}>
            {isLoading ? "submitting..." : "submit"}
          </button>
          <div>
            Dont have an account?{" "}
            <Link className="login-link" to="/signup">
              Signup
            </Link>
          </div>
          <div>
            <Link className="login-link" onClick={handleGuest}>
              login as guest
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
