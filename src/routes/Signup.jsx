import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import flitterIcon from "../assets/flitterIcon.svg";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassweord, setShowConfirmPassword] = useState(false);
  return (
    <div className="login-container">
      <form className="login-form" action="">
        <h1
        //   style={{
        //     fontSize: "30px",
        //   }}
        >
          signup
          <img
            src={flitterIcon}
            style={{ marginLeft: "5px", height: "30px", width: "30px" }}
            alt=""
          />
        </h1>
        <div>
          <label htmlFor="signup_username">Username:</label>
          <input type="text" id="signup_username" placeholder="John Doe" />
        </div>

        <div>
          <label htmlFor="signup_email">Email:</label>
          <input
            type="email"
            id="signup_email"
            placeholder="testuser@gmail.com"
          />
        </div>
        <div style={{ position: "relative", alignContent: "center" }}>
          <label htmlFor="signup_password">Password:</label>
          <input
            type={showPassword == true ? "text" : "password"}
            id="signup_password"
            style={{
              width: "100%",
              paddingRight: "40px",
              boxSizing: "border-box",
            }}
          />

          <img
            onClick={() => setShowPassword(!showPassword)}
            src={eyeIcon}
            alt="toggle password visibility"
            style={{
              position: "absolute",
              right: "10px",
              top: "78%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            alignContent: "center",
          }}
        >
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type={showConfirmPassweord == true ? "text" : "password"}
            id="confirm_password"
          />
          <img
            onClick={() => setShowConfirmPassword(!showConfirmPassweord)}
            src={eyeIcon}
            alt="toggle password visibility"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              position: "absolute",
              right: "10px",
              top: "77%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
        <div className="login-footer">
          <button className="login-submit">submit</button>
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
