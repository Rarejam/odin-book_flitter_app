import { Link } from "react-router-dom";
import eyeIcon from "../assets/eye.png";
import flitterIcon from "../assets/flitterIcon.svg";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <form className="login-form" action="">
        <h1
        //   style={{
        //     fontSize: "30px",
        //   }}
        >
          login
          <img
            src={flitterIcon}
            style={{ marginLeft: "5px", height: "30px", width: "30px" }}
            alt=""
          />
        </h1>

        <div>
          <label htmlFor="login_email">Email:</label>
          <input
            type="email"
            id="login_email"
            placeholder="testuser@gmail.com"
          />
        </div>

        <div style={{ position: "relative", alignContent: "center" }}>
          <label htmlFor="login_password">Password:</label>
          <input
            type={showPassword == true ? "text" : "password"}
            id="login_password"
            // placeholder="********"
            style={{
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
            Dont have an account?{" "}
            <Link className="login-link" to="/signup">
              Signup
            </Link>
          </div>
          <div>
            <Link className="login-link" to="/">
              login as guest
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
