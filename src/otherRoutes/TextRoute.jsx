import { Link, useParams } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import { useEffect, useState } from "react";
import flitterIcon from "../assets/flitterIcon.svg";
import deleteIcon from "../assets/delete.svg";
import UploadIcon from "../assets/upload.svg";
import axios from "axios";

const TextRoute = () => {
  const [newMsg, setNewMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [file, setFile] = useState(null);

  const { id } = useParams();
  const token = localStorage.getItem("token");

  // Fetch logged-in user
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    getUserInfo();
  }, [token]);

  // Fetch chat messages + chat user info
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/user/text/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessages(data.messages || []);
        setChatUser(data.chatUser || null);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [id, token]);

  // Send message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMsg.trim() && !file) return;

    try {
      setSending(true);
      const formData = new FormData();
      formData.append("newMsg", newMsg);
      if (file) formData.append("text_image", file);

      const { data } = await axios.post(
        `http://localhost:3000/api/user/text/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessages((prev) => [...prev, data]);
      setNewMsg("");
      setFile(null);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  // Delete message
  const deleteMessage = async (msgId) => {
    try {
      await axios.delete(`http://localhost:3000/api/user/text/${msgId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages((prev) => prev.filter((msg) => msg.id !== msgId));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (loading || !user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "24px",
        }}
        className="loading-screen"
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="text-container">
      {/* Header */}
      <div
        className="settings-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 15px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/home/users" style={{ textDecoration: "none" }}>
            <img src={ArrowIcon} alt="Back" style={{ width: "24px" }} />
          </Link>
          <div style={{ fontWeight: "500" }}>
            Texting with <i>{chatUser?.username || "Unknown"}...</i>
          </div>
        </div>

        {/* Receiver Profile Picture */}
        {chatUser?.profileImage && (
          <Link to={`/home/profile/${chatUser.id}`}>
            <img
              src={chatUser.profileImage || flitterIcon}
              alt="Receiver"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
                border: "2px solid #ddd",
              }}
            />
          </Link>
        )}
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-message-row ${
                msg.senderId === user.id ? "sent-row" : "received-row"
              }`}
            >
              {/* Delete icon for your own messages */}
              {msg.senderId === user.id && (
                <img
                  src={deleteIcon}
                  alt="Delete"
                  onClick={() => deleteMessage(msg.id)}
                  className="delete-icon"
                />
              )}

              <div
                className={`chat-bubble ${
                  msg.senderId === user.id ? "sent" : "received"
                }`}
              >
                {msg.content}
                {msg.chatImage && (
                  <div
                    className="post-text-image"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={msg.chatImage}
                      alt="Message Attachment"
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
          ))
        ) : (
          <div
            className="no-messages"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: "24px",
            }}
          >
            No messages yet
          </div>
        )}
      </div>

      {/* Message Input */}
      <form
        onSubmit={sendMessage}
        encType="multipart/form-data"
        className="chat-input-area"
      >
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a message..."
        />

        {/* Upload input (looks exactly like your button) */}
        <label className="upload-btn" title="Upload image">
          <img src={UploadIcon} alt="Upload" />
          <input
            type="file"
            name="text_image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </label>

        <button type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default TextRoute;
