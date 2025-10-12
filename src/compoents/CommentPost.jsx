import createIcon from "../assets/create.svg";
import { Link, useParams } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const CommentPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [reply, setReply] = useState("");
  const [posting, setPosting] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPostWithComments = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/comments/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPostWithComments();
  }, [id, token]);

  useEffect(() => {
    const findUserImage = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserImage(data.profileImage);
        setUserId(data.id);
      } catch (error) {
        console.log(error);
      }
    };
    findUserImage();
  }, [token]);

  // now handle loading after hooks
  if (!post) {
    return <div>Loading...</div>;
  }
  async function handleReply(e) {
    e.preventDefault();
    console.log(reply);

    if (!reply.trim()) return; // don’t submit empty

    setPosting(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/api/comments/${id}`,
        {
          content: reply,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // append the new comment
      setPost((prev) => ({
        ...prev,
        comments: [...(prev.comments || []), res.data],
      }));

      setReply(""); // clear textarea
    } catch (error) {
      console.error(
        "Error submitting comment:",
        error.response?.data || error.message
      );
    } finally {
      setPosting(false);
    }
  }
  const handleDelete = async ({ authorId, commentId }) => {
    if (authorId !== userId) {
      alert("cannot delete comment of others");
    } else if (authorId == userId) {
      try {
        const res = await axios.delete(
          `http://localhost:3000/api/comments/${commentId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // if their commetnID is not equal to commetnId then that true so they can go to the new array
        // else thats false and thay are pushed out and nvr go to the new array
        if (res.status == 200) {
          setPost((prev) => ({
            ...prev,
            comments: prev.comments.filter((c) => c.id !== parseInt(commentId)),
          }));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleLike = async (commentId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/like/comment/${commentId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.liked == true) {
        alert("comment liked");
      } else if (data.liked == false) {
        alert("comment unliked");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <img src={ArrowIcon} alt="" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div> Comment Section</div> <img src={createIcon} alt="" />
        </div>
      </div>
      {/* post */}
      <div className="profile-post-div">
        <div className="post-container">
          <div>
            <Link
              to={`/home/profile/${post.author?.id}`}
              className="post-profile"
            >
              <img
                src={post.author?.profileImage || flitterIcon}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
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
                  // backgroundColor: "red",
                }}
              >
                <Link
                  to={`/home/profile/${post.author?.id}`}
                  className="post-username"
                  style={{ color: "grey" }}
                >
                  {post.author?.username}
                </Link>
                <div
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "grey",
                  }}
                >
                  {post.author?.email}4ce96c
                </div>{" "}
                <div
                  style={{
                    paddingBottom: "4.5px",
                  }}
                >
                  .
                </div>
                <div style={{ color: "grey" }}>
                  {new Date(post.createdAt).toLocaleString()}
                </div>
              </div>
              <div className="post-text">{post.content}</div>
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
              <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
            </div>
            <div>
              <img src={likeIcon} alt="" />
              <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
            </div>
            <div>
              <img src={reshareIcon} alt="" />
              <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
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
                src={userImage || flitterIcon}
                alt=""
                style={{
                  height: "50px",
                  width: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="post-form-div">
              <form onSubmit={handleReply}>
                <textarea
                  name="textarea_post"
                  id="textarea_post"
                  placeholder="replying..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                ></textarea>
                {/* <div> */}
                <button
                  type="submit"
                  className="upload-label"
                  style={{
                    marginTop: "10px",
                    border: "none",
                    opacity: posting ? 0.6 : 1,
                    cursor: posting ? "not-allowed" : "pointer",
                  }}
                  disabled={posting}
                >
                  {posting ? "Replying..." : "Reply"}
                </button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>

        {/* comments */}
        {post.comments?.length == 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
              fontSize: "20px",
            }}
          >
            {" "}
            No coments
          </div>
        ) : (
          post.comments.map((comment) => {
            return (
              <div className="post-container scroll-animate" key={comment.id}>
                <div>
                  <Link
                    to={`/home/profile/${comment.author?.id}`}
                    className="post-profile"
                  >
                    <img
                      src={comment.author?.profileImage || flitterIcon}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
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
                        // backgroundColor: "red",
                      }}
                    >
                      <Link
                        to={`/home/profile/${comment.author?.id}`}
                        className="post-username"
                        style={{ color: "grey" }}
                      >
                        {comment.author?.username}
                      </Link>
                      <div
                        style={{
                          fontSize: "13px",
                          fontStyle: "italic",
                          color: "grey",
                        }}
                      >
                        {comment.author?.email}4ce96c
                      </div>{" "}
                      <div
                        style={{
                          paddingBottom: "4.5px",
                        }}
                      >
                        .
                      </div>
                      <div style={{ color: "grey" }}>
                        <div style={{ color: "grey" }}>
                          {comment.createdAt
                            ? new Date(comment.createdAt).toLocaleString()
                            : ""}
                        </div>
                      </div>
                    </div>
                    <div className="post-text">
                      <div> {comment.content}</div>
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
                    <img
                      src={likeIcon}
                      alt=""
                      onClick={() => handleLike(comment.id)}
                    />
                    <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                      {comment._count?.likes || 0}
                    </div>
                  </div>
                  <div>
                    <img src={reshareIcon} alt="" />
                    <div style={{ marginLeft: "5px", fontSize: "18px" }}>0</div>
                  </div>
                  <div>
                    <img
                      src={deleteIcon}
                      alt=""
                      onClick={() =>
                        handleDelete({
                          authorId: comment.authorId,
                          commentId: comment.id,
                        })
                      }
                    />
                    <div style={{ marginLeft: "5px", fontSize: "18px" }}></div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CommentPost;
