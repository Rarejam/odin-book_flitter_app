import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import { Link } from "react-router-dom";

const HomeDiscover = () => {
  return (
    <div className="home-container">
      <div className="create-post-container">
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
                placeholder="flittering..."
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
            <button>Post</button>
          </div>
        </div>
      </div>
      {/* posts */}

      <div>
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
                <div
                  style={{
                    marginLeft: "5px",
                    fontSize: "18px",
                  }}
                >
                  1
                </div>
              </Link>
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
        {/* posts */}
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
                <div className="post-text-image">
                  <img
                    src={likeIcon}
                    alt=""
                    style={{
                      minHeight: "100%",
                      width: "100%",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 4px grey",
                    }}
                  />{" "}
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
        {/* posts */}
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
        {/* poost */}
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
                <div className="post-text-image">
                  <img
                    src={likeIcon}
                    alt=""
                    style={{
                      minHeight: "100%",
                      width: "100%",
                      borderRadius: "5px",
                      boxShadow: "0px 0px 4px grey",
                    }}
                  />{" "}
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

export default HomeDiscover;
