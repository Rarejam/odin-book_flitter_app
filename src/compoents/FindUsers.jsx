import { Link, Outlet } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";

const FindUsers = () => {
  return (
    <div>
      <div className="settings-header">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
          }}
          className="settings-header-link"
        >
          <img src={ArrowIcon} alt="" style={{}} />
        </Link>
        <div>Find Users</div>
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
