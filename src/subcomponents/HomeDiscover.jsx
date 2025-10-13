import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import LikeFilledIcon from "../assets/likeFilled.svg";
import reshareFilledIcon from "../assets/shareFilled.svg";
import spinner from "../assets/spinner.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeDiscover = () => {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [posting, setPosting] = useState(false);
  const [LoggedUser, setLoggedUser] = useState(null);
  const [postImage, setPostImage] = useState("");

  const token = localStorage.getItem("token");

  // ✅ Step 1: get logged-in user info first
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoggedUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, [token]);

  // ✅ Step 2: fetch posts only when user is loaded
  useEffect(() => {
    if (!LoggedUser) return;

    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const { data } = await axios.get("http://localhost:3000/api/discover", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Use author's followers list to check if current user follows them
        const updatedPosts = data.map((post) => ({
          ...post,
          followed:
            post.author.id === LoggedUser.id
              ? false // ✅ don't allow self-follow
              : post.author.followers?.some(
                  (f) => f.followerId === LoggedUser.id
                ),
        }));

        setPosts(updatedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error.response?.data || error);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [token, LoggedUser]);

  // create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    setPosting(true);
    try {
      const formData = new FormData();
      formData.append("content", postText);
      if (postImage) formData.append("post_image", postImage);

      const { data } = await axios.post(
        "http://localhost:3000/api/discover",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts([data, ...posts]);
      setPostText("");
      setPostImage(null);
    } catch (error) {
      console.log(error);
    } finally {
      setPosting(false);
    }
  };

  // delete post
  const handleDelete = async ({ authorId, postId }) => {
    if (authorId !== LoggedUser.id) {
      alert("Cannot delete other users' posts");
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/api/discover/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts((prev) => prev.filter((p) => p.id !== postId));
      alert("Post deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // toggle like
  const handleLike = async (postId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/like/post/${postId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts((posts) =>
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

  // toggle reshare
  const handleReshare = async (postId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/reshare/post/${postId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts((posts) =>
        posts.map((p) =>
          p.id === postId
            ? {
                ...p,
                reshared: data.reshared,
                _count: {
                  ...p._count,
                  reshares: data.reshared
                    ? p._count.reshares + 1
                    : p._count.reshares - 1,
                },
              }
            : p
        )
      );
    } catch (err) {
      console.error("Error resharing post:", err);
    }
  };

  // toggle follow/unfollow
  const handleFollow = async ({ followingId }) => {
    try {
      if (followingId == LoggedUser.id) {
        alert("Cannot follow yourself mehh");
        return;
      }

      const { data } = await axios.post(
        `http://localhost:3000/api/follow/${followingId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPosts((prev) =>
        prev.map((p) =>
          p.author?.id === followingId ? { ...p, followed: data.followed } : p
        )
      );

      // alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  if (loadingPosts) {
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
        <img style={{ borderRadius: "50%" }} src={spinner} alt="" />
      </div>
    );
  }
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
              src={LoggedUser?.profileImage || flitterIcon}
              alt="profile"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
          </div>

          <div className="post-form-div">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <textarea
                name="post_text"
                id="textarea_post"
                placeholder="flittering..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>

              <label htmlFor="post_image" className="upload-label">
                Upload File or Image
              </label>
              <input
                type="file"
                id="post_image"
                name="post_image"
                className="upload-input"
                onChange={(e) => setPostImage(e.target.files[0])}
              />

              <button
                className="post-btn"
                type="submit"
                style={{
                  marginTop: "10px",
                  marginLeft: "50%",
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
      </div>

      {/* Posts */}
      <div>
        {loadingPosts ? (
          <p
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "24px",
            }}
          >
            No posts Found...
          </p>
        ) : posts.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "24px",
            }}
          >
            <img style={{ borderRadius: "50%" }} src={spinner} alt="" />
          </p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-container ">
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
                      width: "150%",
                      height: "2em",
                      border: "none",
                      borderRadius: "8px",
                      backgroundColor: "#1da1f2",
                      color: "white",
                      marginTop: "20px",
                    }}
                    onClick={() =>
                      handleFollow({ followingId: post.author?.id })
                    }
                  >
                    {post.followed ? "unfollow" : "follow"}
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
                  <img
                    src={post.liked ? LikeFilledIcon : likeIcon}
                    alt="like"
                    onClick={() => handleLike(post.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                    {post._count?.likes}
                  </div>
                </div>

                <div onClick={() => handleReshare(post.id)}>
                  <img
                    src={post.reshared ? reshareFilledIcon : reshareIcon}
                    alt="reshare"
                    style={{ cursor: "pointer" }}
                  />{" "}
                  {post._count?.reshares}
                </div>

                <div
                  onClick={() =>
                    handleDelete({ authorId: post.authorId, postId: post.id })
                  }
                >
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
