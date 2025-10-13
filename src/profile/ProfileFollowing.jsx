import { Link, useParams } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import commentIcon from "../assets/Comments.svg";
import likeIcon from "../assets/like.svg";
import reshareIcon from "../assets/refleet.svg";
import deleteIcon from "../assets/delete.svg";
import inLoveGif from "../assets/inLove.gif";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileFollowing = () => {
  const token = localStorage.getItem("token");
  const [followingPosts, setFollowingPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { profileId } = useParams();

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/profile/${profileId}/following/posts`,
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
  }, [token, profileId]);

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
        <img style={{ borderRadius: "50%" }} src={inLoveGif} alt="" />
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
          height: "40vh",
          fontSize: "24px",
        }}
      >
        No Posts Found
      </div>
    );
  }

  return (
    <div className="profile-post-div">
      {followingPosts.map((post) => (
        <div key={post.id} className="post-container scroll-animate">
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
      ))}
    </div>
  );
};

export default ProfileFollowing;
