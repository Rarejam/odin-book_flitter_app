import createIcon from "../assets/create.svg";
import { Link } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";

const CommentPost = () => {
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
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div> Comment Section</div> <img src={createIcon} alt="" />
        </div>
      </div>
      {/* post */}
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
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "grey",
                  }}
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
                nonesense shey e no get sense this is what i was telling bro
                about that he was now telling me nonesense shey e no get sense
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
                  marginTop: "20px",
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
        {/* comment box */}
        <div
          className="create-post-container"
          style={{ boxShadow: "0px 0px 2px grey" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
                boxShadow: "0px 0px 4px rgba(29, 161, 242, 0.4)",
              }}
            >
              <img
                src={flitterIcon}
                alt=""
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              />
            </div>
            <div className="post-form-div">
              <form action="">
                <textarea
                  name="textarea_post"
                  id="textarea_post"
                  placeholder="replying..."
                ></textarea>
              </form>
            </div>
          </div>
          <div className="post-bottom-div">
            <div>
              {" "}
              <form className="settings-first-form">
                <div>
                  <label htmlFor="profile_picture" className="upload-label">
                    Upload File or Image
                  </label>
                  <input
                    type="file"
                    id="profile_picture"
                    name="profile_picture"
                    className="upload-input"
                  />
                </div>
              </form>
            </div>
            <div>
              <button>reply</button>
            </div>
          </div>
        </div>

        {/* comments */}
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
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "grey",
                  }}
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
                <div>
                  {" "}
                  this is what i was telling bro about that he was now telling
                  me nonesense shey e no get sense this is what i was telling
                  bro about that he was now telling me nonesense shey e no get
                  sense
                </div>
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
                  marginTop: "20px",
                }}
              >
                follow
              </button>
            </div>
          </div>

          <div className="post-bottom">
            <div>
              <Link
                style={{
                  display: "flex",
                  textDecoration: "none",
                  alignItems: "center",
                }}
                to="/home/comment"
              >
                {" "}
                <img src={commentIcon} alt="" />
                <div style={{ marginLeft: "5px", fontSize: "18px" }}>1</div>
              </Link>{" "}
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
    </div>
  );
};

export default CommentPost;
