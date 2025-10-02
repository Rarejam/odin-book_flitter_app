import { Link, Outlet } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <div className="settings-header">
        <div>Home</div>
      </div>
      <div
        className="profile-nav"
        style={{ margin: "0px", boxShadow: "0px 0px 6px grey" }}
      >
        <Link to="/home/" className="profile-link">
          Discover
        </Link>
        <Link to="/home/following" className="profile-link">
          Following
        </Link>
      </div>

      {/* <div className="home-container"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default HomeComponent;
