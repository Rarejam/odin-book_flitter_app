import { Link } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";

const Posts = () => {
  return (
    <div className="profile-post-div">
      <div className="post-container">
        <div>
          <Link to="/home/profile" className="post-profile">
            <img
              src={flitterIcon}
              alt=""
              style={{
                height: "40px",
                width: "40px",
              }}
            />
          </Link>
          <div className="post-content">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "10px",
                marginTop: "10px",
                // backgroundColor: "red",
              }}
            >
              <Link
                to="/home/profile"
                className="post-username"
                style={{ color: "grey" }}
              >
                Rarajam
              </Link>
              <div
                style={{ fontSize: "13px", fontStyle: "italic", color: "grey" }}
              >
                @agarajamaldeen4ce96c
              </div>{" "}
              <div
                style={{
                  paddingBottom: "4.5px",
                }}
              >
                .
              </div>
              <div style={{ color: "grey" }}>30days</div>
            </div>
            <div className="post-text">
              this is what i was telling bro about that he was now telling me
              nonesense shey e no get sense this is what i was telling bro about
              that he was now telling me nonesense shey e no get sense
            </div>
          </div>
          <div className="post-follow-btn">
            <button
              style={{
                width: "175%",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",

                color: "white",
              }}
            >
              follow
            </button>
          </div>
        </div>

        <div className="post-bottom">
          <div>
            <img src={commentIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={likeIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={reshareIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={deleteIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
          </div>
        </div>
      </div>

      <div className="post-container">
        <div>
          <Link to="/home/profile" className="post-profile">
            <img
              src={flitterIcon}
              alt=""
              style={{
                height: "40px",
                width: "40px",
              }}
            />
          </Link>
          <div className="post-content">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "10px",
                marginTop: "10px",
                // backgroundColor: "red",
              }}
            >
              <Link
                to="/home/profile"
                className="post-username"
                style={{ color: "grey" }}
              >
                Rarajam
              </Link>
              <div
                style={{ fontSize: "13px", fontStyle: "italic", color: "grey" }}
              >
                @agarajamaldeen4ce96c
              </div>{" "}
              <div
                style={{
                  paddingBottom: "4.5px",
                }}
              >
                .
              </div>
              <div style={{ color: "grey" }}>30days</div>
            </div>
            <div className="post-text">
              this is what i was telling bro about that he was now telling me
              nonesense shey e no get sense this is what i was telling bro about
              that he was now telling me nonesense shey e no get sense
            </div>
          </div>
          <div className="post-follow-btn">
            <button
              style={{
                width: "175%",
                height: "2em",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1da1f2",
                color: "white",
              }}
            >
              follow
            </button>
          </div>
        </div>

        <div className="post-bottom">
          <div>
            <img src={commentIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={likeIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={reshareIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
          </div>
          <div>
            <img src={deleteIcon} alt="" />
            <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
