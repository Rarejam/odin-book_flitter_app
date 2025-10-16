import { Link, useNavigate } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import eyeIcon from "../assets/eye.png";
import { useState } from "react";
import BookGif from "../assets/Book.gif";
import axios from "axios";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState("");
  const [err, setErr] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSaving(true);
    // Only include fields with values
    const formData = {};
    if (username) formData.username = username;
    if (email) formData.email = email;
    if (bio) formData.bio = bio;
    if (password) formData.password = password;

    // If nothing to update
    if (Object.keys(formData).length === 0) {
      setErr("Please update at least one field.");
      setSuccessful("");
      return;
    }

    setErr(""); // clear previous errors
    try {
      setSaving(false);
      const res = await axios.put(
        "http://localhost:3000/api/update-user",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsername("");
      setEmail("");
      setPassword("");
      setBio("");
      if (res.status == 200) {
        setSuccessful("Successfully Updated");
        setUsername("");
        setEmail("");
        setBio("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      setErr(
        "Update failed. Please try again.(email already exists and unique)"
      );
      setSuccessful("");
    } finally {
      setSaving(false);
      setLoading(false);
    }
  };
  //to delete user
  const handleDeleteUser = async (e) => {
    e.preventDefault();
    setDeleting(true);
    setLoading(true);
    try {
      const res = await axios.delete("http://localhost:3000/api/delete-user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setErr("Couldn't delete user");
    } finally {
      setDeleting(false);
      setLoading(false);
    }
  };

  //uploading image for profile pic
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //get the fomr data obj
      const formData = new FormData();

      // append the image-file to the fomrData with a particular name field
      formData.append("profile_image", imageFile);
      const res = await axios.post(
        "http://localhost:3000/api/user/picture",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data", //set type beung sent...
          },
        }
      );
      if (res.status == 200) {
        setSuccessful("Profile Image Successfully uploaded");
      }
    } catch (error) {
      console.log(error);
      setErr("Could'nt upload Image (select Image before uplaod)");
    } finally {
      setLoading(false);
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
          <img src={ArrowIcon} alt="" style={{}} />
        </Link>
        <div>Settings</div>
      </div>

      <div className="settings-content">
        <form
          className="settings-first-form"
          encType="multipart/form-data"
          onSubmit={handleUpload}
        >
          <div>
            <label htmlFor="profile_picture" className="upload-label">
              Select Profile Picture
            </label>
            <input
              type="file"
              id="profile_picture"
              name="profile_image"
              className="upload-input"
              //get the file obj not the string from the input file
              // thats why its e.target.files[0]
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <button type="submit" className="upload-button">
              Upload
            </button>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "20px",
            marginBottom: "10px",
            // backgroundColor: "red",
          }}
        >
          <span style={{ color: "red", marginRight: "10px" }}>{err}</span>
          <span style={{ color: "green" }}>{successful}</span>
          {loading ? (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "8vh",
                fontSize: "24px",
              }}
            >
              <img style={{ borderRadius: "50%" }} src={BookGif} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>

        <form className="settings-second-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="update username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="update email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="bio-textarea-div">
            <label htmlFor="bio">Bio</label>
            <textarea
              type="text"
              id="bio"
              placeholder="update bio"
              className="bio-textarea"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div style={{ position: "relative" }}>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="update password or leave empty"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              onClick={() => setShowPassword(!showPassword)}
              src={eyeIcon}
              alt=""
              style={{
                position: "absolute",
                height: "26px",
                width: "26px",
                right: "3%",
                top: "50%",
                cursor: "pointer",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <button type="submit" disabled={saving}>
            {saving ? "updating" : "Save Changes"}
          </button>
          <button
            style={{
              backgroundColor: "rgb(252, 52, 52)",
            }}
            onClick={handleDeleteUser}
            disabled={deleting}
          >
            {deleting ? "deleting" : "Delete User"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
