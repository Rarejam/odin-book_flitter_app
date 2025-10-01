import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeDiscover = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false); // for fetching
  const [posting, setPosting] = useState(false); // for creating a post
  const token = localStorage.getItem("token");

  // fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const { data } = await axios.get("http://localhost:3000/api/discover", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error.response?.data || error);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [token]);

  // create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    setPosting(true);
    try {
      console.log("Posting content:", postText);

      const { data } = await axios.post(
        "http://localhost:3000/api/discover",
        { content: postText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // add new post to the top of the list
      setPosts([data, ...posts]);
      setPostText("");
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error);
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="home-container">
      {/* Create Post */}
      <div className="create-post-container">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
              marginLeft: "20px",
              boxShadow: "0px 0px 4px rgba(29, 161, 242, 0.4)",
            }}
          >
            <img
              src={flitterIcon}
              alt="profile"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
          </div>

          <div className="post-form-div">
            <form onSubmit={handleSubmit}>
              <textarea
                name="post_text"
                id="textarea_post"
                placeholder="flittering..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>

              <button
                className="upload-label"
                type="submit"
                style={{
                  marginTop: "10px",
                  border: "none",
                  opacity: posting ? 0.6 : 1,
                  cursor: posting ? "not-allowed" : "pointer",
                }}
                disabled={posting}
              >
                {posting ? "Posting..." : "Post"}
              </button>
            </form>
          </div>
        </div>

        <div className="post-bottom-div">
          <form className="settings-first-form">
            <label htmlFor="post_image" className="upload-label">
              Upload File or Image
            </label>
            <input
              type="file"
              id="post_image"
              name="post_image"
              className="upload-input"
            />
          </form>
        </div>
      </div>

      {/* Posts */}
      <div>
        {loadingPosts ? (
          <p style={{ textAlign: "center" }}>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p style={{ textAlign: "center" }}>No posts yet</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-container">
              <div>
                <Link to="/home/profile" className="post-profile">
                  <img
                    src={post.author?.profileImage || flitterIcon}
                    alt="profile"
                    style={{ height: "40px", width: "40px" }}
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
                      to="/home/profile"
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
                    <div style={{ paddingBottom: "4.5px" }}>.</div>
                    <div style={{ color: "grey" }}>
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

                <div>
                  <img src={reshareIcon} alt="reshare" />
                  <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                    {post.shares?.length || 0}
                  </div>
                </div>

                <div>
                  <img src={deleteIcon} alt="delete" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeDiscover;
