import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER_LINK } from "./constant";
import axios from "axios";
import { login, logout } from "./store/authSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Logout from "./components/Logout";
import PostCreate from "./pages/PostCreate";
import UpdatePage from "./pages/UpdatePage";
import MyProfile from "./pages/MyProfile";
import VerifyAndDeleteAccount from "./pages/VerifyAndDeleteAccount";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    axios({
      url: `${SERVER_LINK}/user/get-user`,
      method: "get",
      withCredentials: true,
    })
      .then((userData) => {
        //console.log(userData);
        if (userData) {
          dispatch(login({ userData: userData.data.data }));
        }
      })
      .catch((error) => {
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authStatus]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {authStatus === true ? (
            <Route path="" element={<Dashboard />} />
          ) : (
            <Route path="" element={<Landing />} />
          )}
          <Route path="signin" element={<Signin />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route
            path="email-verification/:verificationToken"
            element={<VerifyEmail />}
          />
          <Route
            path="delete-account/:userId"
            element={<VerifyAndDeleteAccount />}
          />
          <Route path="post-create" element={<PostCreate />} />
          <Route path="update/:postId" element={<UpdatePage />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
