import CommentPost from "./compoents/CommentPost";
import FindUsers from "./compoents/FindUsers";
import HomeComponent from "./compoents/HomeComponent";
import Profile from "./compoents/Profile";
import Settings from "./compoents/Settings";
// import Reshare from "./otherRoutes/reshare";
import ProfileComments from "./profile/ProfileComments";
import ProfileFollowing from "./profile/ProfileFollowing";
import ProfilePosts from "./profile/ProfilePosts";
import App from "./routes/App";
import Index from "./routes/Index";
import Login from "./routes/login";
import Signup from "./routes/signup";
import AllUsers from "./subcomponents/AllUsers";
import Comments from "./subcomponents/Comments";
import FindFollowers from "./subcomponents/FindFollowers";
import FindFollowing from "./subcomponents/FindFollowing";
import Reshare from "./subcomponents/Reshare";
import HomeDiscover from "./subcomponents/HomeDiscover";
import HomeFollowing from "./subcomponents/HomeFollowing";
import Posts from "./subcomponents/Posts";
import ViewProfile from "./subcomponents/ViewProfile";
import TextRoute from "./otherRoutes/textRoute";

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
      { path: "/home/text/:id", element: <TextRoute /> },
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
            path: "reshares",
            element: <Reshare />,
          },
        ],
      },
      {
        path: "profile/:profileId",
        element: <ViewProfile />,
        children: [
          { index: true, element: <ProfilePosts /> },
          { path: "comments", element: <ProfileComments /> },
          { path: "following", element: <ProfileFollowing /> },
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
