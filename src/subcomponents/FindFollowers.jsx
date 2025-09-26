import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";
import { Link } from "react-router-dom";
import createIcon from "../assets/create.svg";

const FindFollowers = () => {
  return (
    <div className="users-div">
      {/* another user */}
      <div className="user">
        <div className="profile">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img src={flitterIcon} alt="" />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>Rarejam</div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            @agarajamaldeen4ce96c
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src={dateIcon}
              alt=""
              style={{
                height: "15px",
                width: "15px",
              }}
            />{" "}
            Joined on September 2025
          </div>
          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>1 follwoing</div>
            <div> 0 followers</div>
          </div>

          {/* //another */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <button
              style={{
                width: "8vw",
                height: "2.4em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: "2px",
              }}
            >
              follow
              <img src={createIcon} alt="" style={{}} />
            </button>
            <Link
              to="/home/profile"
              style={{
                width: "8vw",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              view
            </Link>
          </div>
        </div>
      </div>

      {/* another user */}
      <div className="user">
        <div className="profile">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img src={flitterIcon} alt="" />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>Rarejam</div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            @agarajamaldeen4ce96c
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src={dateIcon}
              alt=""
              style={{
                height: "15px",
                width: "15px",
              }}
            />{" "}
            Joined on September 2025
          </div>
          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>1 follwoing</div>
            <div> 0 followers</div>
          </div>

          {/* //another */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <button
              style={{
                width: "8vw",
                height: "2.4em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: "2px",
              }}
            >
              follow
              <img src={createIcon} alt="" style={{}} />
            </button>
            <Link
              to="/home/profile"
              style={{
                width: "8vw",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              view
            </Link>
          </div>
        </div>
      </div>

      {/* another user */}

      <div className="user">
        <div className="profile">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img src={flitterIcon} alt="" />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>Rarejam</div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            @agarajamaldeen4ce96c
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src={dateIcon}
              alt=""
              style={{
                height: "15px",
                width: "15px",
              }}
            />{" "}
            Joined on September 2025
          </div>
          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>1 follwoing</div>
            <div> 0 followers</div>
          </div>

          {/* //another */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <button
              style={{
                width: "8vw",
                height: "2.4em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: "2px",
              }}
            >
              follow
              <img src={createIcon} alt="" style={{}} />
            </button>
            <Link
              to="/home/profile"
              style={{
                width: "8vw",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              view
            </Link>
          </div>
        </div>
      </div>

      {/* /another user */}
      <div className="user">
        <div className="profile">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img src={flitterIcon} alt="" />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>Rarejam</div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            @agarajamaldeen4ce96c
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src={dateIcon}
              alt=""
              style={{
                height: "15px",
                width: "15px",
              }}
            />{" "}
            Joined on September 2025
          </div>
          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>1 follwoing</div>
            <div> 0 followers</div>
          </div>

          {/* //another */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <button
              style={{
                width: "8vw",
                height: "2.4em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                gap: "2px",
              }}
            >
              follow
              <img src={createIcon} alt="" style={{}} />
            </button>
            <Link
              to="/home/profile"
              style={{
                width: "8vw",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              view
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFollowers;
