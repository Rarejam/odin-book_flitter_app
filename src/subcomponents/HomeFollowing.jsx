import { Link } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import LikeFilledIcon from "../assets/likeFilled.svg";
import reshareFilledIcon from "../assets/shareFilled.svg";
import spinnerGif from "../assets/spinner.gif";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const token = localStorage.getItem("token");
  const [followingPosts, setFollowingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reshared, setReshared] = useState(false);

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/user/following",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setFollowingPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    getUserPosts();
  }, [token]);

  const handleReshare = async (postId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/reshare/post/${postId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
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

  const handleLike = async (postId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/like/post/${postId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setFollowingPosts((posts) =>
        posts.map((p) =>
          p.id === postId
            ? {
                ...p,
                liked: data.liked,
                _count: {
                  ...p._count,
                  likes: data.liked ? p._count.likes + 1 : p._count.likes - 1,
                },
              }
            : p
        )
      );
    } catch (error) {
      console.log(error);
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
          height: "80vh",
          fontSize: "24px",
        }}
      >
        <img style={{ borderRadius: "50%" }} src={spinnerGif} alt="" />
      </div>
    );
  }

  if (followingPosts.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          fontSize: "24px",
        }}
      >
        No Posts Found
      </div>
    );
  }

  const handleUnfollow = async (authorId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/follow/${authorId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Follow/unfollow response:", data);

      if (data.followed === false) {
        // unfollowed, remove that user's posts
        setFollowingPosts((prev) =>
          prev.filter((p) => p.authorId !== authorId)
        );
      }
    } catch (err) {
      console.error("Error unfollowing:", err.response?.data || err.message);
    }
  };

  return (
    <div className="profile-post-div">
      {followingPosts.map((post) => (
        <div key={post.id} className="post-container">
          <div>
            <Link
              to={`/home/profile/${post.authorId}`}
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
                  to={`/home/profile/${post.authorId}`}
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
                <div
                  style={{
                    paddingBottom: "4.5px",
                    verticalAlign: "end",
                  }}
                >
                  •
                </div>
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
                  width: "150%",
                  height: "2em",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1da1f2",
                  color: "white",
                  marginTop: "20px",
                }}
                onClick={() => handleUnfollow(post.authorId)}
              >
                Unfollow
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
                  style={{ marginLeft: "5px", fontSize: "18px", color: "grey" }}
                >
                  {post.comments?.length || 0}
                </div>
              </Link>
            </div>

            <div>
              <img
                src={post.liked ? LikeFilledIcon : likeIcon}
                alt="like"
                onClick={() => handleLike(post.id)}
              />
              <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                {post._count.likes}
              </div>
            </div>

            <div onClick={() => handleReshare(post.id)}>
              <img
                src={reshared ? reshareFilledIcon : reshareIcon}
                alt="reshare"
              />{" "}
              {post._count?.reshares}
            </div>

            <div>
              <img
                src={deleteIcon}
                alt="delete"
                onClick={() => alert("Cannot delete posts of others")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
