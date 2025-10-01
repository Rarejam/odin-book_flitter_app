import { Link, useNavigate } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import flitterIcon from "../assets/flitterIcon.svg";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate fields
    if (!username || !email || !password || !confirm_password) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/signup", {
        username,
        email,
        password,
        confirm_password,
      });

      setMessage(res.data.message || "Signup successful!");
      setError("");
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message);
      setMessage("");
    } finally {
      setLoading(false);
      setMessage("Signup successful!");
    }
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{ marginTop: "30px" }}
      >
        <h1>
          Signup
          <img
            src={flitterIcon}
            style={{ marginLeft: "5px", height: "30px", width: "30px" }}
            alt=""
          />
        </h1>

        {/* Show messages */}
        {error && <p style={{ color: "red" }}>{error}, Failed to submit</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <div>
          <label htmlFor="signup_username">Username:</label>
          <input
            type="text"
            id="signup_username"
            name="username"
            placeholder="John Doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="signup_email">Email:</label>
          <input
            type="email"
            id="signup_email"
            name="email"
            placeholder="testuser@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ position: "relative", alignContent: "center" }}>
          <label htmlFor="signup_password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="signup_password"
            style={{
              width: "100%",
              paddingRight: "40px",
              boxSizing: "border-box",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={eyeIcon}
            alt="toggle password visibility"
            style={{
              position: "absolute",
              right: "10px",
              top: "60%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
          />
        </div>

        <div style={{ position: "relative", alignContent: "center" }}>
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            value={confirm_password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            src={eyeIcon}
            alt="toggle password visibility"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              position: "absolute",
              right: "10px",
              top: "60%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
          />
        </div>

        <div className="login-footer">
          <button className="login-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <div>
            Already have an account?{" "}
            <Link className="login-link" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="login-link" to="/">
              Index page
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
