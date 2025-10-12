import mdnIcon from "../assets/mdn.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import { useState } from "react";

const RightNav = () => {
  const [following1, setFollowing1] = useState(false);
  const [following2, setFollowing2] = useState(false);
  const [following3, setFollowing3] = useState(false);

  return (
    <div className="right-nav">
      {/* //input-slide */}

      {/* //first-slide */}
      <div className="first-slide">
        <h2>What's Happening</h2>
        {/* <hr style={{ width: "80%" }} /> */}
        <div>
          <div>Technology</div>
          <div
            style={{
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            #ReatcJs
          </div>
          <div>45.2k posts</div>{" "}
        </div>
        <div>
          <div>Trending</div>
          <div
            style={{
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            #TheOdinProject
          </div>
          <div>28.7k posts</div>{" "}
        </div>

        <div>
          <div>Programming</div>
          <div
            style={{
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            #JavaScript
          </div>
          <div>32.1k posts</div>{" "}
        </div>

        <div>
          <div>Web Development</div>
          <div
            style={{
              fontSize: "20px",
              fontStyle: "bold",
            }}
          >
            #NodeJs
          </div>
          <div>28.7k posts</div>{" "}
        </div>
      </div>

      {/* //second slide */}
      <div className="second-slide">
        <h2 style={{ margin: "10px" }}>Who To Follow</h2>

        <div
          style={{
            gap: "8px",
          }}
        >
          <img
            className="username-image"
            src={reactIcon}
            style={{
              marginLeft: "5px",
              height: "30px",
              width: "30px",
            }}
            alt=""
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "45%",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              React
            </div>
            <div style={{ fontSize: "12px" }}>@reactjs</div>
          </div>
          <button
            style={{
              width: "25%",
              height: "2em",
              alignSelf: "center",
              border: "none",
              borderRadius: "8px",
            }}
            className="cta-button"
            onClick={() => setFollowing1(!following1)}
          >
            {following1 ? "following" : "follow"}
          </button>
        </div>

        <div
          style={{
            gap: "8px",
          }}
        >
          <img
            className="username-image"
            src={nodeIcon}
            style={{
              marginLeft: "5px",
              height: "30px",
              width: "30px",
            }}
            alt=""
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "45%",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Node.js
            </div>
            <div style={{ fontSize: "12px" }}>@nodejs</div>
          </div>
          <button
            style={{
              width: "25%",
              height: "2em",
              alignSelf: "center",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={() => setFollowing2(!following2)}
          >
            {following2 ? "following" : "follow"}
          </button>
        </div>

        <div
          style={{
            gap: "8px",
          }}
        >
          <img
            className="username-image"
            src={mdnIcon}
            style={{
              marginLeft: "5px",
              height: "30px",
              width: "30px",
            }}
            alt=""
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "45%",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              MDN Docs
            </div>
            <div style={{ fontSize: "12px" }}>@mozdevnet</div>
          </div>
          <button
            style={{
              width: "25%",
              height: "2em",
              alignSelf: "center",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={() => setFollowing3(!following3)}
          >
            {following3 ? "following" : "follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
