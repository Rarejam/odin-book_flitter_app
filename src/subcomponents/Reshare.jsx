import { Link } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import reshareFilledIcon from "../assets/shareFilled.svg";
import Ghost from "../assets/Ghost.gif";
import axios from "axios";
import { useEffect, useState } from "react";

const Reshare = () => {
  const token = localStorage.getItem("token");
  const [resharedPosts, setResharedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reshared, setReshared] = useState(false);

  useEffect(() => {
    const getUserReshares = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/reshare/user/reshared",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setResharedPosts(data);
      } catch (err) {
        console.log("Could not load reshared posts", err);
      } finally {
        setLoading(false);
      }
    };

    getUserReshares();
  }, [token]);

  // handleReshare
  const handleReshare = async (postId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/reshare/post/${postId}`,
        {}, // empty body
        { headers: { Authorization: `Bearer ${token}` } } // headers go here
      );

      if (data.reshared) {
        alert("Post reshared!");
        setReshared(true);
      } else {
        alert("Post unshared!");
        setReshared(false);
      }
    } catch (err) {
      console.error("Error resharing post:", err);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          fontSize: "24px",
        }}
      >
        <img style={{ borderRadius: "50%" }} src={Ghost} alt="" />
      </div>
    );
  }

  if (resharedPosts.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          fontSize: "24px",
        }}
      >
        No Reshares Found
      </div>
    );
  }

  return (
    <div className="profile-post-div">
      {resharedPosts.map((post) => {
        return (
          <div key={post.id} className="post-container ">
            <div>
              <Link
                to={`/home/profile/${post.author?.id}`}
                className="post-profile"
              >
                <img
                  src={post.author?.profileImage || flitterIcon}
                  alt="profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
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
                  }}
                >
                  <Link
                    to={`/home/profile/${post.author?.id}`}
                    className="post-username"
                    style={{ color: "grey" }}
                  >
                    {post.author?.username || "Unknown"}
                  </Link>
                  <div
                    style={{
                      fontSize: "13px",
                      fontStyle: "italic",
                      color: "grey",
                    }}
                  >
                    {post.author?.email || "no-email"}
                  </div>
                  <div style={{ paddingBottom: "4.5px", verticalAlign: "end" }}>
                    •
                  </div>
                  <div style={{ color: "grey", fontSize: "14px" }}>
                    {new Date(post.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="post-text">
                  {post.content}
                  {post.postImage && (
                    <div className="post-text-image">
                      <img
                        src={post.postImage}
                        alt=""
                        style={{
                          minHeight: "100%",
                          width: "100%",
                          borderRadius: "5px",
                          boxShadow: "0px 0px 4px grey",
                        }}
                      />
                    </div>
                  )}
                </div>
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
                  to={`/home/comment/${post.id}`}
                >
                  <img src={commentIcon} alt="comments" />
                  <div
                    style={{
                      marginLeft: "5px",
                      fontSize: "18px",
                      color: "grey",
                    }}
                  >
                    {post.comments?.length || 0}
                  </div>
                </Link>
              </div>

              <div>
                <img src={likeIcon} alt="like" />
                <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                  {post.likes?.length || 0}
                </div>
              </div>

              <div onClick={() => handleReshare(post.id)}>
                <img
                  src={reshared ? reshareFilledIcon : reshareIcon}
                  alt="reshare"
                />
                <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                  {post._count?.reshares || 0}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reshare;
