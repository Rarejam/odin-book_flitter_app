import CommentPost from "./compoents/CommentPost";
import FindUsers from "./compoents/FindUsers";
import HomeComponent from "./compoents/HomeComponent";
import Profile from "./compoents/Profile";
import Settings from "./compoents/Settings";
import App from "./routes/App";
import Index from "./routes/Index";
import Login from "./routes/login";
import Signup from "./routes/signup";
import AllUsers from "./subcomponents/AllUsers";
import Comments from "./subcomponents/Comments";
import FindFollowers from "./subcomponents/FindFollowers";
import FindFollowing from "./subcomponents/FindFollowing";
import Following from "./subcomponents/Following";
import HomeDiscover from "./subcomponents/HomeDiscover";
import HomeFollowing from "./subcomponents/HomeFollowing";
import Posts from "./subcomponents/Posts";

const routes = [
  {
    index: true,
    element: <Index />,
  },
  {
    path: "/home",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomeComponent />,
        children: [
          {
            index: "true",
            element: <HomeDiscover />,
          },
          {
            path: "following",
            element: <HomeFollowing />,
          },
        ],
      },
      {
        path: "/home/users",
        element: <FindUsers />,
        children: [
          {
            index: true,
            element: <AllUsers />,
          },
          { path: "followers", element: <FindFollowers /> },
          {
            path: "following",
            element: <FindFollowing />,
          },
        ],
      },
      {
        path: "/home/profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: "comments",
            element: <Comments />,
          },
          {
            path: "following",
            element: <Following />,
          },
        ],
      },
      {
        path: "/home/settings",
        element: <Settings />,
      },
      {
        path: "/home/comment/:id",
        element: <CommentPost />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
export default routes;
