import { Link, useParams } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileComments = () => {
  const token = localStorage.getItem("token");
  const [userComments, setUserComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { profileId } = useParams();

  useEffect(() => {
    const getUserComments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/profile/${profileId}/comments`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUserComments(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserComments();
  }, [token]);

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
        Loading Comments...
      </div>
    );
  }

  if (userComments.length === 0) {
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
        No Comments Found
      </div>
    );
  }

  return (
    <div className="profile-post-div">
      {userComments.map((comment) => (
        <div key={comment.id} className="post-container scroll-animate">
          <div>
            <Link
              to={`/home/profile/${comment.author?.id}`}
              className="post-profile"
            >
              <img
                src={comment.author?.profileImage || flitterIcon}
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
                  to={`/home/profile/${comment.author?.id}`}
                  className="post-username"
                  style={{ color: "grey" }}
                >
                  {comment.author?.username || "Unknown"}
                </Link>
                <div
                  style={{
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "grey",
                  }}
                >
                  {comment.author?.email || "no-email"}
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
                  {new Date(comment.createdAt).toLocaleString()}
                </div>
              </div>

              <div className="post-text">{comment.content}</div>
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
              <img src={likeIcon} alt="like" />
              <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                {comment.likes?.length || 0}
              </div>
            </div>

            <div>
              <img src={reshareIcon} alt="reshare" />
              <div style={{ marginLeft: "5px", fontSize: "18px" }}>
                {comment.shares?.length || 0}
              </div>
            </div>

            <div>
              <img src={deleteIcon} alt="delete" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileComments;
