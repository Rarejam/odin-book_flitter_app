import { Link, Outlet } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import ArrowIcon from "../assets/arrow.svg";
import { useState } from "react";
// import axios from "axios";

const FindUsers = () => {
  const [inputValue, setInputValue] = useState("");
  // const [user, setUser] = useState("");

  // const token = localStorage.getItem("token");

  const handleInput = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post(
    //     "http://localhost:3000/api/all-users",
    //     { inputValue },
    //     { headers: { Authorization: `Bearer ${token}` } }
    //   );
    //   if (res.status === 200) {
    //     setUser(res.data);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <div
        className="settings-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div
          style={{
            width: "50%",
            gap: "10px",
            display: "flex",
            alignItems: "center",
            height: "80%",
          }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
            }}
            className="settings-header-link"
          >
            <img src={ArrowIcon} alt="" style={{}} />
          </Link>
          Find Users
        </div>
        {/* //input-slide */}
        <form className="input-slide-div" onSubmit={handleInput}>
          <div
            className="username-image"
            style={{
              border: "none",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginRight: "5px",
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            className="input-slide"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="search..."
          />
        </form>
      </div>
      <div
        className="profile-nav"
        style={{ margin: "0px", boxShadow: "0px 0px 6px grey" }}
      >
        <Link to="/home/users/" className="profile-link">
          All Users
        </Link>
        <Link to="/home/users/following" className="profile-link">
          Following
        </Link>
        <Link to="/home/users/followers" className="profile-link">
          Followers
        </Link>
      </div>
      <div className="find-users-container">
        <Outlet />
      </div>
    </div>
  );
};

export default FindUsers;
